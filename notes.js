console.log("Starting notes.js")
const fs = require('fs');
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  }catch (e){
    return [];
  }
}
var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}
// console.log(module);
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

// var duplicateValues = notes

var duplicateValues = notes.filter( (note)=>note.title===title)
if (duplicateValues.length===0){
  notes.push(note)
  saveNotes(notes)
  return note;
}

  // console.log('Adding note', title, body);
};
var getAll = () => {
  return fetchNotes();
};
var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((note)=>note.title === title);
  console.log('Note::::::',note);
  return note[0]
  console.log('Reading note',title);
};
var writeNote = (title,body) => {
  console.log('Writing note',title,body);
};
var removeNote = (title) => {
  var notes = fetchNotes()
  var updatedNotes =notes.filter((note) =>note.title !== title)
  saveNotes(updatedNotes)
  return notes.length !== updatedNotes.length
  console.log('Writing note');
};

var logNote = (note)=>{
  console.log('Note Found');
  console.log('--');
  console.log(`note title: ${note.title}``);
  console.log(`note body: ${note.body}`);
}
module.exports = {
  addNote,//shortcut for addNote:addNote beacuse in ES6 both are same
  getAll,
  getNote,
  writeNote,
  removeNote,
  logNote
};
/*module is an object attached to globle name space.
If you want any function or class to be accessable in
other module or .js file use exports and bind it.
For example addNote is available in app.js
*/
