/* global beforeAll describe expect test */
import { Organization, Roles } from '@liquid-labs/orgs-model'

const rolesFile = './policy/roles.json'

describe('roles.json', () => {
  let roles
  beforeAll(() => {
    roles = new Roles({}, rolesFile).hydrate()
  })

  test('is successfully parsed', () => {
    expect(roles).toBeTruthy()
    expect(roles.getAll().length).toBeGreaterThan(5)
  })
})
