/* global fs */
import * as fs from 'fs'

const getRole = (roleName, roles) => {
  const role = roles.find(r => r.name === roleName)
  if (role === undefined) {
    throw new Error(`Role '${roleName}' defined in '${structurePath}' is not defined in roles def '${rolesPath}'.`)
  }

  return role
}

const processImpliedRoles = (role, roles, duties) => {
  for (const impName of role.implies || []) {
    const impRole = getRole(impName, roles)
    duties = duties.concat(impRole.duties || [])

    duties = processImpliedRoles(impRole, roles, duties)
  }

  return duties
}

const genDoc = ([structurePath, rolesPath]) => {
  const companyRoles = JSON.parse(fs.readFileSync(structurePath)).map((r) => r[0])
  const roles = JSON.parse(fs.readFileSync(rolesPath))

  companyRoles.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  const sb = []

  // Note: we expect each line to be terminated with a '\n' when output, so the ending '\n' has the effect of adding an
  // empty line.
  sb.push('# Company Jobs Reference\n')

  sb.push('## Purpose and scope\n')
  sb.push('Here we find all Company job descriptions.\n')

  sb.push('## Job descriptions\n')
  for (const roleName of companyRoles) {
    const role = getRole(roleName, roles)

    sb.push(`### ${role.name}\n`)
    sb.push(`${role.description}\n`)

    let duties = role.duties || []
    duties = processImpliedRoles(role, roles, duties)

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

  return sb
}

export { genDoc }
