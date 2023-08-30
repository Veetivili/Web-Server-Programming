// ********** Exercise 1 **********

// Find out the current user by using console.log() to log the global process variable.
// UNIX Systems: process.env.USER || process.env.LOGNAME
// WINDOWS Systems: process.env.USERNAME
// Command below will output the user which ever OS this application is executed
console.log("Current user:", process.env.USER || process.env.LOGNAME || process.env.USERNAME);
