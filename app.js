console.log('Starting App.......')
const fs = require('fs');
const os = require('os');
const notes = require('./notes')
var user = os.userInfo();
// var res = notes.addNote();
// console.log(res);
var addNum = notes.addNum(1,2);
console.log(addNum)
// template strings are used in place of string concatination
// fs.appendFile('greetings.txt',`Hello ${user.username}!`,function (err){
//   if (err) {
//     console.log('Unable to write to file')
//   }
// });
