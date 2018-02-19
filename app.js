console.log('Starting App.......')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes')
var titleOptions = {
  describe:'Title of note',
  alias:'t',
  demand:true
}

var bodyOptions = {
  describe:'Enter Note body',
  demand:true,
  alias:'b'
}
// Yargs is a utility to access command line arguments efficiently
const argv = yargs
  .command('add','Add new Note',{
    title:titleOptions,
    body:bodyOptions
  })
  .command('remove','Remove note',{
    title:titleOptions,
  })
  .command('read','read note',{
    title:titleOptions,
  })
  .command('list','List all notes',{
  })
  .help()
  .argv

console.log('Yarg',argv)


// Accessing the command line arguments through terminal
var command = argv._[0];// can also do process.argv[2]

if (command === 'add') {
  note = notes.addNote(argv.title,argv.body)
  if (note){
    notes.logNote(note)
  }
  else{
    console.log("Duplicate node")
  }
}else if (command === 'list') {
  console.log(notes.getAll());
} else if (command === 'read') {
  note = notes.getNote(argv.title)
  if(note){
    notes.logNote(note)
  }
  else {
    console.log('No Note to read ')
  }
} else if (command === 'write') {
  notes.writeNote(argv.title,argv.body);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note remoed ' : 'Note not removed';
  console.log(message)
}
else {
  console.log('Command not recognized');
}
