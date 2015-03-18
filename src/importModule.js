'use strict';

import * as mod from './module.js' // Returns object with all exported items namespaced
import modDefault from './module.js' // Returns default exported item
import {A, B, C} from './module.js' // Returns object with A, B, C

console.log('The entire module as an object:', mod);

console.log('Just the default export from the module:', modDefault);


console.log('A:', A);
console.log('B:', B);
console.log('C:', C);
