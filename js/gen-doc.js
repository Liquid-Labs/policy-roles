import { Organization } from '@liquid-labs/orgs-model'

const nameSorter = (name) => (a, b) => {
  if (name in a && name in b) {
    return a[name].toLowerCase().localeCompare(b[name].toLowerCase())
  }
  else if (!(name in a)) return 1
  else /* not in b */ return -1
}

const getPrimaryRole = (staff) => staff.roles[0].getName()

const staffRef = (staff) => `${staff.familyName}, ${staff.givenName} _${staff.email}_`

const roleRef = (roleName) => {
  const roleLink = roleName.toLowerCase().replace(/[^a-z ]*/g, '').replace(/ /g, '-')
  return `[${roleName}](#${roleLink})`
}

const noteManager = (staff, role) => {
  const attachedRole = staff.getAttachedRole(role.name)
  const manager = attachedRole.getManager()
  if (manager !== null && attachedRole.managerRole === undefined) {
    throw new Error(`Did not find expected 'manager role' for '${staff.email}' as '${role.name}'.`)
  }
  const managerRef =
    (manager === null && 'self')
      || (manager.email === staff.email && `self as ${roleRef(attachedRole.managerRole.getName())}`)
      || `${staffRef(manager)} as ${roleRef(attachedRole.managerRole.getName())}`
  return `(managed by ${managerRef})`
}

const noteDesignationSource = (staff, role) => {
  // It's possible to be designatd through multiple routes. I.e., the "Head of Administration" and "Head of Human
  // Resources" could be the same individual.
  const attachedRoles = staff.getAttachedRoles().filter((r) => r.name === role.name)
  const implications = attachedRoles // reduce to list of implied role names
    .map((r) => r.impliedBy)
    .filter((ir) => ir !== undefined)
    .map((ir) => roleRef(ir.getName()))
  if (implications.length > 0) {
    return `(implied by ${implications.join(', ')})`
  }
  else {
    return `(as ${getPrimaryRole(staff)})`
  }
}

const genDoc = (dataPath, staffPath) => {
  const org = new Organization(dataPath, staffPath)

  const companyRoles = org.orgStructure.getNodes().reduce((acc, node) => {
    if (!node.implied) {
      acc.push(node.name)
    }
    /* else { // DEBUG
      console.error(`skipping role ${node.name}`)
    } */
    return acc
  }, [])
  companyRoles.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  // console.error(companyRoles) // DEBUG

  const getRole = (roleName) =>
    org.roles.get(roleName, {
      required  : true,
      errMsgGen : (name) => `Role '${name}' defined in organization structure is not defined.`
    })

  const processImpliedRoles = (role, duties) => {
    for (const { name: impName } of role.implies || []) {
      const impRole = getRole(impName)
      duties = duties.concat(impRole.duties || [])

      duties = processImpliedRoles(impRole, duties)
    }

    return duties
  }

  const sb = []

  // Note: we expect each line to be terminated with a '\n' when output, so the ending '\n' has the effect of adding an
  // empty line.
  sb.push('# Company Jobs and Roles Reference\n')

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

    const staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'))

    const hasMembers = staffInRole && staffInRole.length > 0

    if (role.singular) {
      const staff = staffInRole[0]
      // TODO: check that we don't have multiples.
      hasMembers
        ? sb.push(`${staffRef(staff)} is the current ${role.name} ${noteManager(staff, role)}\n`)
        : sb.push('_*This position is currently vacant.*_\n')
    }
    else {
      sb.push('#### Members\n') // TODO: something like '${role.namePluralized}'

      if (hasMembers) {
        for (const staff of staffInRole) {
          sb.push(`* ${staffRef(staff)} ${noteManager(staff, role)}`)
        }
        sb.push('')
      }
      else {
        sb.push('_*NONE*_\n')
      }
    }
  }

  sb.push('## Designated roles:\n')

  const designationsReducer = (designations, role) => {
    if (role.designated) {
      designations.push(role)
    }
    return designations
  }

  for (const role of org.roles.list().reduce(designationsReducer, []).sort(nameSorter('name'))) {
    sb.push(`### ${role.name}\n`)
    sb.push(`${role.description}\n`)

    sb.push('#### Members\n')

    const staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'))

    if (staffInRole && staffInRole.length > 0) {
      for (const staff of staffInRole) {
        sb.push(`* ${staffRef(staff)} ${noteDesignationSource(staff, role)}`)
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
