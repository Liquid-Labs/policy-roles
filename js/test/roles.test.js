/* global beforeAll describe expect test */
import * as fs from 'fs'

import { Roles } from '@liquid-labs/orgs-model'

const rolesFile = './policy/roles.json'

// This is a bit idiomatic; we're actually testing the parse-ability of the `roles.json` file.
describe('roles.json', () => {
  let roles
  beforeAll(() => {
    roles = new Roles({}, JSON.parse(fs.readFileSync(rolesFile))).hydrate()
  })

  test('is successfully parsed', () => {
    expect(roles).toBeTruthy()
    expect(roles.getAll().length).toBeGreaterThan(5)
  })
})
