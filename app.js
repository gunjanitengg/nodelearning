const add = require('./utils')
const validator = require('validator')  //global packages are not need to given ./ this thing
const getNotes = require('./notes')
console.log(getNotes);
console.log(add);
console.log(validator);

const notes = getNotes()
console.log(notes);
const sum = add(45,2)
console.log(sum)
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by node js')
try{
    fs.appendFileSync('notes.txt','data to append');
    console.log("the data to append was appended to file");
} catch (err){
    console.log('error in the file system');
}
console.log(validator.isEmail('gunjan123.com'));