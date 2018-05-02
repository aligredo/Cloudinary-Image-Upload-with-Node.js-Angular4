var express = require("express"),
	router = express.Router();
	var cloudinary = require('cloudinary');
	var multer  = require('multer');
	var cloudinaryStorage = require('multer-storage-cloudinary');
	var path = require('path');
	var express = require('express');
	var app = express();
	
	cloudinary.config({  //Your Cloudinary API Data
	  cloud_name: '*********',
	  api_key: '*************',
	  api_secret: '*************************'
	});

router.post("/sendImage",
multer({storage: cloudinaryStorage({
 cloudinary: cloudinary,
 allowedFormats: ['jpg', 'png'],
 destination: function (req, file, callback) { callback(null, './uploads');},
 filename: function (req, file, callback) { callback(null, "MyImage")}}) //MyImage is the name of the image which will be uploaded to your Cloudinary storage
}).single('Image'), function(req, res){
	return res.status(200).json({
		msg:"Uploaded"
	})
} );
module.exports = router;
