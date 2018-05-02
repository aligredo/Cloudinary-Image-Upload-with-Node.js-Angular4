var express = require("express"),
    cloudinary = require('cloudinary'),
    bodyParser = require("body-parser"),
  	routes = require("./routes"),
    router = express.Router();
    var path = require('path');
    app = express();
    /*
      Middleware to parse the request body that is in format "application/json" or
      "application/x-www-form-urlencoded" as json and make it available as a key on the req
      object as req.body
    */
    app.use(bodyParser.json());
    app.use(
    	bodyParser.urlencoded({
    		extended: false
    	})
    );
    app.use(express.static(path.join(__dirname, 'uploads')));

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    /*Middleware to match the request with one of our defined routes to do a certain function,
All requests should have /api before writing the route as a convention for api servers
*/
    app.use("/",routes);
    console.log("App Started!");
    module.exports = app;
