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



