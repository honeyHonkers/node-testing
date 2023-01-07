//npm - global command, comes with node
// npm --version

// local dependancy - use it only in this paticular project 
//npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>

//package.json - manifest file (stores important info about projects/package)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const ld = require('lodash')

const items = [ 1, [2,[3,[4]]]]
const newItems = ld.flattenDeep(items)
console.log(newItems)
//flatten deep makes the array flat
//not really a needed package just used as an example