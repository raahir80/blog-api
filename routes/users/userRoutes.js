const express = require("express");
const { userRegisterCtrl, userLoginCtrl, usersCtrl, userProfileCtrl, updateUserCtrl, deleteUserCtrl, profilePhotoUpload } = require("../../controllers/users/userCtrl");
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");
const multer = require("multer");

const userRouter = express.Router();
//Instance of Multer((
const upload = multer({storage})

// POST/api/v1/users/register
userRouter.post("/register",userRegisterCtrl);


// POST/api/v1/users/login
userRouter.post("/login",userLoginCtrl)


// GET/api/v1/users/
userRouter.get('/',usersCtrl)

// GET/api/v1/users/profile/:id
userRouter.get('/profile/',isLogin,userProfileCtrl)

// GET/api/v1/users/:id
userRouter.put("/:id",updateUserCtrl)

// DELETE/api/v1/users/
userRouter.delete("/:id",deleteUserCtrl)


userRouter.post("/profile-photo-upload",isLogin,upload.single('profile'),profilePhotoUpload)


module.exports={
    userRouter
}