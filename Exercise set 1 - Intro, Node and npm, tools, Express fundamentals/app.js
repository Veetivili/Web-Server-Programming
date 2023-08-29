// ********** Exercise 1 **********

// Find out the current user by using console.log() to log the global process variable.
// UNIX Systems: process.env.USER || process.env.LOGNAME
// WINDOWS Systems: process.env.USERNAME
// Command below will output the user which ever OS this application is executed
console.log("Current user:", process.env.USER || process.env.LOGNAME || process.env.USERNAME);

// ********** Exercise 2 **********
// Find out the system uptime and amount of total memory using the built-in os module.
// The node:os module provides operating system-related utility methods and properties.
const os = require('node:os'); 

// os.uptime() returns the system uptime in number of seconds.
// os.totalmem() returns the total amount of system memory in bytes as an integer.
console.log("System uptime:", os.uptime(),'seconds', '\n', "Total memory: ", os.totalmem(),'bytes')

// ********** Exercise 3 **********



// ********** Exercise 4 **********