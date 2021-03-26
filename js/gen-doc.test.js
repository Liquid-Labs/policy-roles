/* global describe expect test */
import { genDoc } from './gen-doc'

describe('genDoc', () => {
  let fullNoImp
  let justSecComp
  beforeAll(() => {
    fullNoImp = genDoc(['./js/test/org-struct.json', './policy/roles.json'])
    justSecComp = genDoc(['./js/test/org-struct-sec-comp.json', './policy/roles.json'])
  })

  test('prints roles in org struct', () => {
    expect(fullNoImp.find((line) => line.match(/## Security Officer/))).toBeTruthy()
  })

  test('skips roles not in org struct', () => {
    expect(fullNoImp.find((line) => line.match(/## Policy Officer/))).not.toBeTruthy()
  })

  test('prints unique implied duties', () => {
    expect(justSecComp.filter((line) => line.match(/Is a member of the Senior Management Team\./))).toHaveLength(1)
  })
})
