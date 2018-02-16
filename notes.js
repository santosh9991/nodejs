console.log("Starting notes.js")

// console.log(module);
module.exports.addNote = () =>{
  console.log('addNote');
  return 'New node';
};
/*module is an object attached to globle name space.
If you want any function or class to be accessable in
other module or .js file use exports and bind it.
*/
