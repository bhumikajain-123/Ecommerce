const Address =  require("../models/Address");


//-------------------------add address -------------------------------

const addAddress = async (req,res)=>{
    try{
   const {fullName,phone,addressLine,city,state,pincode,country} = req.body;
   const userId = req.user.id;

const address = new Address({userId,fullName,phone,addressLine,city,state,pincode,country})

await address.save();
res.status(200).send("Address added successfully");
    }catch(err){
res.status(500).send(err.message);
    }


}

// ----------------------------get address -------------------------------

const getAddress = async (req, res) => {
    try {
        const userId = req.user.id;

        const address = await Address.find({ userId });

        res.status(200).json({
            message: "address",
            address
        });

    } catch (err) {
        res.status(500).json({
            message: "address not found"
        });
    }
};

const updateAddress =async (req,res)=>{

    try{
        const address = await Address.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({message : "address update successully",address});

    }catch(err){
        res.status(500).send(err.message);
    }
  
}

const deleteAddress = async (req,res)=>{

    try{
        const address = await Address.findByIdAndDelete(req.params.id);
        res.send("successfully deleted");
    }catch(err){
        res.status(500).send(err.message);
    }
    
}

module.exports = {addAddress,getAddress,updateAddress,deleteAddress};