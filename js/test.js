import { TSV } from 'tsv'
import * as fs from 'fs'

describe(`roles.tsv`, () => {
	test(`roles.tsv is parsable`, () => {
		const contents = fs.readFileSync('roles.tsv', 'utf8')
		const data = TSV.parse(contents)
		console.log(data)
	})
})
