// for built in modules we don't use the path  or ./

const os = require("os");
const { release } = require("process");
// info about current user
const user = os.userInfo();
console.log(user);

// method returns the  system uptime in seconds/how long the computer  has been running

console.log(`The system uptime  is ${os.uptime()}seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
