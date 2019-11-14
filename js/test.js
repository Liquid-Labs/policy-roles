import { TSV } from 'tsv'
import { Roles } from './roles'

describe(`Roles`, () => {
	let roles
	beforeAll(() => {
		roles = new Roles(`./js/test_data.tsv`)
	})

	test('parses data file', () => expect(roles).toBeTruthy())
	test('ignore blank lines', () => expect(roles.length).toBe(1))
})
