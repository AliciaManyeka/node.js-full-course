//CommonJS  =every file is a module ( by default)
// // MODULES -encapsulated Code (only share minium/what we want)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative");
require("./7-mind-grenade"); // if we have a function inside the module that we invoke that code will run even tho  we did not assign it to a variable

sayHi("anotida");
sayHi(names.john);
sayHi(names.alicia);
