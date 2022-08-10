// const jwt = require('jsonwebtoken')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc Register new User
//@route POST /api/user
//@acces public 
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('please add al fields')

    }
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new ('User already exists')
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Create user
    const user = await User.create({
        name, email, password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('INvalid user data')
    }




    res.json({ message: 'Register User' })
}

)
//@desc Authentication a User
//@route POST /api/users/login
//@acces public 
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
}

)
//@desc Get user data 
//@route GET/api/user/me
//@acces public 
const getME = asyncHandler(async (req, res) => {
    res.json({ message: 'User data display' })
}

)

module.exports = {
    registerUser,
    loginUser,
    getME

}