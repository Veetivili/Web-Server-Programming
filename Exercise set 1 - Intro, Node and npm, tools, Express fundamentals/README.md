
1. Find out the current user by using console.log() to log the global process variable. [3p]
2. Find out the system uptime and amount of total memory using the built-in os module. [3p]
3. Create a basic web server with basic Node.js (based on the material and the provided examples), 
that will send back an index.html file on a GET request to '/'. The application should also send back the following json data on a GET request to '/data'. 
You might need to use JSON.stringify() to make this work. Notice also the Content-Type that you're sending back to the client. [4p]

    ```const jsondata = {count: 35, message: 'Welcome' }```

4. Test the provided sample data for an album collection app by sending HTTP requests with Postman or VS Code REST Client to json-server (install from npm). Test the fetching, creation, deleting and updating of the albums (CRUD). [4p]
