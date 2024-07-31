import express from 'express';

const app = express();

// Define a route handler for GET requests to the root path '/'
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Start the server listening on port 69
app.listen(1025, () => {
    console.log("Server is listening on port 1025!!!");
});
