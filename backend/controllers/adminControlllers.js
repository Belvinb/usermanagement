const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken');

const registerAdmin = asyncHandler(async(req,res)=>{
    const {email,password,isAdmin} = req.body

    const adminExists = await Admin.findOne({email})
    if(adminExists){
        res.status(400)
        throw new Error("Admin already exists")
    }
    const admin = Admin.create({
        email,
        password,
        isAdmin

    })
    if(admin){
        res.json(admin)
        res.status(201).json({
            _id:admin._id,
            email:admin.email,
            password:admin.password,
            isAdmin:admin.isAdmin,
            token:generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error("some error occured")
    }
}
)

const authAdmin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const admin = await Admin.findOne({email})
    if(admin && (await admin.matchpassword(password))){
        res.json({
            _id:admin._id,
            email:admin.email,
            isAdmin:admin.isAdmin,
            token : generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid email or password")
    }
}

)

const getAllUsers = asyncHandler(async(req,res)=>{
    const users = await User.find({})
    if(users){
        res.json(users)

    }else{
        res.status(400)
        throw new Error("some error occured")
    }
})

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        
        const user = await User.findById(req.query.id)
        await user.remove()
        res.json({})
    } catch (error) {
        res.json(error)
    }
})

const getUser = asyncHandler(async(req,res)=>{
    try{
        const user = await User.findById(req.params.userId)
        res.json(user)
    }catch(error){
        res.json(error)
    }
})

//update a user details
const updateUser = asyncHandler(async (req, res) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    };
    const user = await User.findByIdAndUpdate(req.params.userId, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.json(error);
  }
});


module.exports = {
  registerAdmin,
  authAdmin,
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
};