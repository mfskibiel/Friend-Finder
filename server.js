//requiring express package
var express = require("express");
var path = require("path");

var app = express();
//allowing heroku to use port

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//telling server to listen
app.listen(PORT, function () {
    console.log("server is listening on port " + PORT)
});