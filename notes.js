console.log("Starting notes.js")
const fs = require('fs');

// console.log(module);
var addNote = (title, body) => {
  notes = []
  note = {
    title,
    body
  };
  notes.push(notes)
fs.writeFileSync('notes-data.js',JSON.stringify(notes))
  console.log('Adding note', title, body);
};
var getAll = () => {
  console.log('Getting all notes');
};
var getNote = (title) => {
  console.log('Reading note',title);
};
var writeNote = (title,body) => {
  console.log('Writing note',title,body);
};
var removeNote = () => {
  console.log('Writing note');
};
module.exports = {
  addNote,//shortcut for addNote:addNote beacuse in ES6 both are same
  getAll,
  getNote,
  writeNote,
  removeNote
};
/*module is an object attached to globle name space.
If you want any function or class to be accessable in
other module or .js file use exports and bind it.
For example addNote is available in app.js
*/
