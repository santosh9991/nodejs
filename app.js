console.log('Starting App.......')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes')
// Yargs is a utility to access command line arguments efficiently
const argv = yargs.argv
console.log('Process',process.argv)
console.log('Yarg',argv)
// Accessing the command line arguments through terminal
var command = process.argv[2];

if (command === 'add') {
  console.log('Adding new note');
}else if (command === 'list') {
   console.log('Listing all notes');
} else if (command === 'read') {
   console.log('Reading notes');
} else if (command === 'write') {
   console.log('write notes');
} else {
  console.log('Command not recognized');
}
