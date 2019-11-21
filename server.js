//requiring express package
var express = require("express");
var path = require("path");

//allowing heroku to use port

var PORT = process.env.PORT || 8080;

var app = express();

//telling server to listen
app.listen(PORT, function () {
    console.log("server is listening")
});