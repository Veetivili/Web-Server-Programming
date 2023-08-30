## Exercise showcase:

### Exercise 1  

<img src='./images/E1.gif' width="600" />

[View code here](./E1/)

```js
// ********** Exercise 1 **********

// Find out the current user by using console.log() to log the global process variable.
// UNIX Systems: process.env.USER || process.env.LOGNAME
// WINDOWS Systems: process.env.USERNAME
// Command below will output the user which ever OS this application is executed
console.log("Current user:", process.env.USER || process.env.LOGNAME || process.env.USERNAME);
```

---

### Exercise 2  

<img src='./images/E2.gif' width="600" />

[View code here](./E2/)

```js
// ********** Exercise 2 **********
// Find out the system uptime and amount of total memory using the built-in os module.
// The node:os module provides operating system-related utility methods and properties.
const os = require('node:os'); 

// os.uptime() returns the system uptime in number of seconds.
// os.totalmem() returns the total amount of system memory in bytes as an integer.
console.log("System uptime:", os.uptime(),'seconds', '\n', "Total memory: ", os.totalmem(),'bytes')
```

---

### Exercise 3  

<img src='./images/E3.gif' width="600" />

[View code here](./E3/)

```js
// Import http module & fs module to read files in the root folder
const http = require('http');
const { readFileSync } = require('fs');

// Read the index.html file
const root = readFileSync('./index.html');

// Json data to be shown on the /data route
const jsondata = {count: 35, message: 'Welcome' };

// Creating the server and setting the routes
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url); // To see the url in the console after every request

    if (url === '/') {
        res.writeHead(200, {'content-type':'text/html'}); // Setting the header
        res.write(root); // Writing the html file
        res.end();
    }
    // Setting the route for json data
    else if (url === '/data') {
        res.writeHead(200, {'content-type':'application/json'});
        res.end(JSON.stringify(jsondata)); // Converting the json data to string
    }
    // Setting the response for bad requests
    else {
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>Not found</h1>');
        res.end();
    }
});

const port = 3042;
server.listen(port);
```

---

### Exercise 4  

<img src='./images/E1.gif' width="600" />

[View code here](./E4/)

---


