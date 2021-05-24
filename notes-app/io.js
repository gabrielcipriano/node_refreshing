import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

import * as notes from './notes.js';

function addHandler(argv){
    notes.addNote(argv.title, argv.body);
    console.log("note added!");
}

function listHandler() {
    
}

function readHandler(argv) {
    
}

export function processArgvCommands(){
    return yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder:{
            title:{
                describe: "note title",
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: "note body",
                demandOption: true,
                type: 'string'
            },
        },
        handler: addHandler
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler: ()=>{
            console.log('Removing last note');
        }
    })
    .command({
        command: 'list',
        describe: 'Lists a note',
        handler: listHandler
    })
    .command({
        command: 'read',
        describe: 'Reads a note',
        handler: readHandler
    })
    // .options({
    //     'run': {
    //       alias: 'r',
    //       describe: 'run your program',
    //       type: "boolean",
    //       demandOption: true
    //     },
    //     'path': {
    //       alias: 'p',
    //       describe: 'provide a path to file',
    //       demandOption: true
    //     },
    //     'spec': {
    //       alias: 's',
    //       describe: 'program specifications'
    //     }
    // })
    .argv;
}
// yargs.option({
//     option: 'verbose',
//     describe: 'A verbose description',
//     handler: ()=>{
//         console.log();
//     }
// })