//CommonJs, every file is module(by default)
//Modules - Encapculated code(only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-gernade')

 
sayHi('Asim')
sayHi(names.john)
sayHi(names.peter)