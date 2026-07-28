const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();



router.post("/register", async (req,res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password,10);
        const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : passwordHash,
            role : req.body.role,
            
        });

        await user.save();

        res.status(201).send("User successfully registered");

    } catch(err) {

        res.status(500).send(err.message);

    }
});


router.post("/login", async (req,res)=>{

   const {email,password} = req.body;

   const user = await User.findOne({email});

   if(!user){
    return res.status(404).send("Email not exist");
   }
const ismatch = await bcrypt.compare(password,user.password);

if(!ismatch){
return res.status(401).send("Invalid password");
}

return res.send("login successfull");



});

module.exports = router;