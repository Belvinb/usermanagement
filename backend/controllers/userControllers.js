const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler (async (req,res)=>{
    const { name, email, phone, password } = req.body;

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400)
        throw new Error("User already exists")
    }
    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

        
    
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Some error occured")
    }
})


const authUser= asyncHandler(async (req, res) => {
  const {email,password} = req.body;

  const user = await User.findOne({email})

  if (user && (await user.matchpassword (password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      token:generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }

});


module.exports = {registerUser,authUser}