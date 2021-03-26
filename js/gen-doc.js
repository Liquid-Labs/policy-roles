/* global fs */
import * as fs from 'fs'

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
    const role = roles.find(r => r.name === roleName)
    if (role === undefined) {
      throw new Error(`Role '${roleName}' defined in '${structurePath}' is not defined in roles def '${rolesPath}'.`)
    }

    sb.push(`### ${role.name}\n`)
    sb.push(`${role.description}\n`)
    if (role.duties) {
      sb.push('Duties:')
      for (const duty of role.duties || []) {
        sb.push(`* ${duty.description}`)
      }
      sb.push('')
    }
  }

  return sb
}

export { genDoc }
