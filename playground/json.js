// var personString = '{"name":"santosh","age":26}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person)
const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
