const path = require("path");
console.log(path.sep);

// joins a sequence of path  segments using platform specific separator as  the limiter and also  returns a normalized result  think path methods using a method which uses

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

// how to access the last potion and the method nam e to access it is called basename
const base = path.basename(filePath);

console.log(base);

// method that returns the absolute path is called path.resolve.It accepts a sequence of path or path segments and resolve it into absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
  