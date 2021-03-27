import { Organization } from '@liquid-labs/orgs-model'

const genDoc = (dataPath, staffPath) => {
  const org = new Organization(dataPath, staffPath)

  const companyRoles = org.orgStructure.getNodes().reduce((acc, node) => {
    if (!node.implied) {
      acc.push(node.name)
    }
    return acc
  }, [])
  companyRoles.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  const getRole = (roleName) =>
    org.roles.get(roleName, {
      required  : true,
      errMsgGen : (name) => `Role '${name}' defined in organization structure is not defined.`
    })

  const processImpliedRoles = (role, duties) => {
    for (const impName of role.implies || []) {
      const impRole = getRole(impName)
      duties = duties.concat(impRole.duties || [])

      duties = processImpliedRoles(impRole, duties)
    }

    return duties
  }

  const sb = []

  // Note: we expect each line to be terminated with a '\n' when output, so the ending '\n' has the effect of adding an
  // empty line.
  sb.push('# Company Jobs Reference\n')

  sb.push('## Purpose and scope\n')
  sb.push('Here we find all Company job descriptions.\n')

  sb.push('## Job descriptions\n')
  for (const roleName of companyRoles) {
    const role = getRole(roleName)

    sb.push(`### ${role.name}\n`)
    sb.push(`${role.description}\n`)

    let duties = role.duties || []
    duties = processImpliedRoles(role, duties)

    if (duties) {
      const origCount = duties.length
      duties.slice().reverse().forEach((duty, rI) => {
        const expectI = origCount - rI - 1
        const foundI = duties.findIndex(td => td.description === duty.description)
        if (expectI !== foundI) {
          duties.splice(expectI, 1)
        }
      })

      sb.push('Duties:')
      for (const duty of duties || []) {
        sb.push(`* ${duty.description}`)
      }
      sb.push('')
    }
  }

  sb.push('## Designations\n')

  const designationsReducer = (designations, role) => {
    if (role.designated) {
      designations.push(role)
    }
    return designations
  }
  const nameSorter = (name) => (a, b) => a[name].toLowerCase().localeCompare(b[name].toLowerCase())

  for (const role of org.roles.list().reduce(designationsReducer, []).sort(nameSorter('name'))) {
    sb.push(`## ${role.name}\n`)

    const staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'))

    if (staffInRole && staffInRole.length > 0) {
      for (const staff of staffInRole) {
        sb.push(`* ${staff.familyName}, ${staff.givenName} _${staff.email}_`)
      }
      sb.push('')
    }
    else {
      sb.push('_*NONE*_\n')
    }
  }

  return sb
}

export { genDoc }
