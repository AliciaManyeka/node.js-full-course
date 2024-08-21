// fs means file system.is a built-in module that provides an API for interacting with the file system. It allows you to perform various operations on files and directories, such as 1  reading, writing, creating, deleting, and renaming them

// method>>>create  variable and provide a path to a file to read

const{readFileSync,writeFileSync}= require('fs');
 
const first =readFileSync("./content/first.txt", 'utf8');
const second =readFileSync("./content/second.txt", 'utf8');


// method
writeFileSync('./content/result-sync.txt',`Here is the result:${first} ${second}`,);