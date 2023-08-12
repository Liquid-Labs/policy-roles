/* global beforeAll describe expect test */
import * as fs from 'node:fs'
import * as fsPath from 'node:path'

import { Roles } from '@liquid-labs/liq-roles'

const rolesFile = fsPath.join(__dirname, '..', '..', 'policy', 'roles.json')

// This is a bit idiomatic; we're actually testing the parse-ability of the `roles.json` file.
describe('roles.json', () => {
  let roles
  beforeAll(() => {
    roles = new Roles({ items : JSON.parse(fs.readFileSync(rolesFile)), org : {} })
  })

  test('is successfully parsed', () => {
    expect(roles).toBeTruthy()
    expect(roles.list().length).toBeGreaterThan(5)
  })
})
