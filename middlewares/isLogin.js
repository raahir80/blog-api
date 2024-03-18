const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req,res,next)=>{
    //get token from header
    const token = getTokenFromHeader(req)
    // verify the token
    const decodedUser = verifyToken(token)
    //save the user into req obj
    req.userAuth = decodedUser.id;
    if(!decodedUser){
        return res.json({
            message:'Invalid/Expired Token, Please login again',
        })
    }else{
        next();
    }
    
};

module.exports = isLogin;