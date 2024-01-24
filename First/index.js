// Import the Express.js module
const express = require("express");
require("dotenv").config();
// create an instance of the Express application
const app = express();

// The app variable represents your web application. You use it to define routes and other settings.

// Define the port number that the server will listen on
// const port = 3000;
// Just Like a physical CPU has ports, here, we specify a virtual port for the server to listen on.

// Define a route for handling HTTP GET requests to the root path ('/')
app.get("/", (req, res) => {
  // when a GET request is made to '/', send the response "Hello, Express!
  res.send("hello world");
});

// Define a route for a'hypothetical Twitter endpoint
app.get("/twitter", (req, res) => {
  res.send("prathamcon");
});

// Define a route for a login page
app.get("/login", (req, res) => {
  //  Sending an HTML response
  res.send("<hi>Please login at Chai aur Code</h1>");
});

// start the server and make it Listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`server listening at http://localhost: ${process.env.PORT}`);
});

// Once the server is started, log a message to the console c
