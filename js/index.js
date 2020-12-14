import * as fs from 'fs'

// TODO: the use of an 'index' file is a little misleading in this case. We want to build a tool, not a 'bundle'. We would like to update the catalyst-scripts (which need to be reworked) to be a bit more flexible.

const args = process.argv.slice(2);
const content = fs.readFileSync(args[0])
const roles = JSON.parse(content)

roles.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

console.log(`# Company Roles Reference\n`)

console.log(`## Purpose and scope\n`)
console.log(`This document provides a reference for all roles within the Company.\n`)

console.log(`## Roles\n`)
roles.forEach((role) => {
  console.log(`### ${role.name}\n`)
  console.log(`${role.jobDescription}\n`)
})
