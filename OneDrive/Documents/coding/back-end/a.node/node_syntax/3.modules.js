//Modules
//every file in node is a module

const names = require('./4.names')//./ = local module(file)
const sayHi = require('./5.utils(functions)')//./ = local module(file)
const data = require('./6.alteranitive-exports')
require('./7.mind-grenade')//if we have a function inside the module - the code will run even though we didnt invoke the variable
console.log(data)
sayHi('luke')
sayHi(names.john)//they are in the names object
sayHi(names.peter)//they are in the names property
