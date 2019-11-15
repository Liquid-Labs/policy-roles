import { Roles } from '@liquid-labs/policies-model'

const rolesFile = `./policy/roles.tsv`

describe(`roles.tsv`, () => {
	test(`is successfully parsed`, () => {
		const roles = new Roles(rolesFile)
		expect(roles).toBeTruthy()
		expect(roles.length).toBeGreaterThan(5)
	})
})
