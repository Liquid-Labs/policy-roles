import { Roles } from '@liquid-labs/policies-model'

const rolesFile = `./policy/roles.tsv`

describe(`roles.tsv`, () => {
	let roles
	beforeAll(() => { roles = new Roles(rolesFile) })
	test(`is successfully parsed`, () => {

		expect(roles).toBeTruthy()
		expect(roles.length).toBeGreaterThan(5)
	})
	test(`each line has a column for each key`, () => {
		const expectedLength = roles.keys.length
		roles.data.forEach((row, i) => expect(row.length).toEqual(expectedLength, `Expected ${expectedLength} but found ${row.length} columns at item ${i+1}`))
	})
})
