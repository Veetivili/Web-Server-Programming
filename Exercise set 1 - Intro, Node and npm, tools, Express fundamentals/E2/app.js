// ********** Exercise 2 **********
// Find out the system uptime and amount of total memory using the built-in os module.
// The node:os module provides operating system-related utility methods and properties.
const os = require('node:os'); 

// os.uptime() returns the system uptime in number of seconds.
// os.totalmem() returns the total amount of system memory in bytes as an integer.
console.log("System uptime:", os.uptime(),'seconds', '\n', "Total memory: ", os.totalmem(),'bytes')