import chalk from 'chalk';


// import {processArgvCommands} from './io.js';

// const argv = processArgvCommands();

// console.log(notes.getNotes());

// console.log(argv);


import { Notes } from './notes.js';

const notes = new Notes();

console.log(notes.getNotes());