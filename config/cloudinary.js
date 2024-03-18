const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage}= require('multer-storage-cloudinary');
require("dotenv").config();
// configure cloudinary

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});


//Instance of Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg','png'],
    params:{
        folder:'blog-api',
        transformation:[{width: 500,height:500}]
    }
});

module.exports = storage;