/* global beforeAll describe expect test */
import { Roles } from '@liquid-labs/policies-model'

const rolesFile = './policy/roles.json'

describe('roles.json', () => {
  let roles
  beforeAll(() => { roles = new Roles(rolesFile) })

  test('is successfully parsed', () => {
    expect(roles).toBeTruthy()
    expect(roles.getAll().length).toBeGreaterThan(5)
  })
})
