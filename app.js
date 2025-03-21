// import express and morgan(logger)
const express = require("express");
const logger = require("morgan");
// assign express function to the "app" var
const app = express();
// init port 
const PORT = 5505;

//! middleware
// to read incoming JSON data 
app.use(express.json());
// morgan logger 
app.use(logger("dev"));
// to send JSON data out
app.use(express.urlencoded({ extended: false }));
// route to api folder
app.use("/api", require("./api"));

// handle wrong endpoint input error
app.all("*", (req, res) => {
    res.status(404).send("Page not found");
});

// start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));