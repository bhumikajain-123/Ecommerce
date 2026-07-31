const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{
    try{
    const token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token,"mysecretkey");

    req.user = decode;
    next();
    }catch(err){
           res.status(401).send("Invalid Token");
    }

};

module.exports = auth;