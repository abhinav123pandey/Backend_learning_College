console.log("Hello Backend!");

import sub,{add} from './utils.js'
import mul from './demo/functions.js'
import readFile from './fileSystem.js';

//addition
const addition= add(2,3);
console.log(addition);

//subtract
const subtract = sub(4,2);
console.log(subtract);

//multiply
const multiply= mul(2,3);
console.log(multiply);

//File system - read operations
readFile();