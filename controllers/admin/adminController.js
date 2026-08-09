const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const adminLogin = async (req,res) =>{
 try{   
    const {email,password} = req.body;

    const user = await User.findOne({email});
  
if(!user){
    return res.status(404).json({message : "Admin not found"});
}

if(user.role!=="admin"){
    return res.status(403).json({message : "You are not authorized"});
}

const isMatch = await bycrypt.compare(password,user.password);

if(!isMatch){

    return res.status(401).json({message : "Invalid Password"});
}

const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      "mysecretkey",
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({message : "admin successfull login",
        token
    })


}catch(err){
    res.status(500).json(err.message);
}
}

module.exports = {adminLogin};