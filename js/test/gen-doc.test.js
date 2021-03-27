/* global beforeAll describe expect test */
import { genDoc } from '../gen-doc'

describe('genDoc', () => {
  let fullNoImp
  let justSecComp
  beforeAll(() => {
    fullNoImp = genDoc('./js/test/data-simple', './js/test/data-simple/orgs/staff.json')
    justSecComp = genDoc('./js/test/data-just-sec-comp', './js/test/data-just-sec-comp/orgs/staff.json')
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
