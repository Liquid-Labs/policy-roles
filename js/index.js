import { genDoc } from './gen-doc'

// TODO: the use of an 'index' file is a little misleading in this case. We want to build a tool, not a 'bundle'. We would like to update the catalyst-scripts (which need to be reworked) to be a bit more flexible.

for (const line of genDoc( { dataPath: process.argv[2] })) {
  console.log(line)
}
