var express = require("express"),
	router = express.Router(),
	 cloudinary = require('cloudinary'),
	 multer  = require('multer'),
	 cloudinaryStorage = require('multer-storage-cloudinary'),
	 path = require('path'),
	 express = require('express'),
	 app = express();

	//Configuring Cloduinary API
	cloudinary.config({  //Your Cloudinary API Data
	  cloud_name: '*********',
	  api_key: '*************',
	  api_secret: '*************************'
	});

//The post request to call the multer uploader
router.post("/sendImage",
multer({storage: cloudinaryStorage({
 cloudinary: cloudinary,
 allowedFormats: ['jpg', 'png'],
 destination: function (req, file, callback) { callback(null, './uploads');},
 filename: function (req, file, callback) { callback(null, "MyImage")}}) //MyImage is the name of the image which will be uploaded to your Cloudinary storage
}).single('Image'), function(req, res){ //To return OK status to the user after uploading
	return res.status(200).json({
		msg:"Uploaded"
	})
} );
module.exports = router;
