/* global describe expect test */
import { genDoc } from './gen-doc'

describe('genDoc', () => {
  let exampleA
  beforeAll(() => {
    exampleA = genDoc(['./js/test/org-struct.json', './policy/roles.json'])
  })

  test('prints roles in org struct', () => {
    expect(exampleA.find((line) => line.match(/## Security Officer/))).toBeTruthy()
  })

  test('skips roles not in org struct', () => {
    expect(exampleA.find((line) => line.match(/## Policy Officer/))).not.toBeTruthy()
  })
})
