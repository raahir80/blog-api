const User = require("../../model/User/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const {appErr,AppErr} = require("../../utils/appErr");

//Register
const userRegisterCtrl = async (req, res,next) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(new AppErr("User Already Exist",500))
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create the user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//Login
const userLoginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.json({
        msg: "Invalid login credentials",
      });
    }
    //verify password
    const isPasswordMatched = await bcrypt.compare(
      password,
      userFound.password
    );

    if (!isPasswordMatched) {
      return res.json({
        msg: "Invalid login credentials",
      });
    }

    res.json({
      status: "Success",
      data: {
        firstname:userFound.firstname,
        lastname:userFound.lastname,
        email:userFound.email,
        isAdmin:userFound.isAdmin,
        token:generateToken(userFound._id)
      }
    });
  } catch (error) {
    res.json(error.message);
  }
};
// All Users
const usersCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

//profile
const userProfileCtrl = async (req, res) => {
//const {id} = req.params;
try {

  const token = getTokenFromHeader(req);
  //console.log(token);
  const user = await User.findById(req.userAuth)
    res.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//update
const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "update user route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "delete user route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  usersCtrl,
  userProfileCtrl,
  updateUserCtrl,
  deleteUserCtrl,
};
