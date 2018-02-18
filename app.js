console.log('Starting App.......')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes')
// Yargs is a utility to access command line arguments efficiently
const argv = yargs.argv
// console.log('Process',process.argv)
/*command line arguments are available on process object which is globle
Process [ '/usr/bin/node',
  '/home/coder/Desktop/personal_workspace/node_notes/app.js',
  'read',
  'write',
  '--title=secret' ]
*/
console.log('Yarg',argv)
/*
Yarg { _: [ 'read', 'write' ], title: 'secret', '$0': 'app.js' }
*/

// Accessing the command line arguments through terminal
var command = argv._[0];// can also do process.argv[2]

if (command === 'add') {
  notes.addNote(argv.title,argv.body)
}else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'write') {
  notes.writeNote(argv.title,argv.body);
} else if (command === 'remove') {
  notes.removeNote(argv.title,argv.body);
}
else {
  console.log('Command not recognized');
}
