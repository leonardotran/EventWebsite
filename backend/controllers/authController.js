const express = require('express'); 
const mongoose = require('mongoose'); 
const User = require('../models/user');
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 
exports.signinController = async (req, res)=> {
    const { email, password } = req.body


    console.log("getting here"); 

    try {
        console.log("verifying"); 
        // const secret = require('crypto').randomBytes(64).toString('hex')

        // find the user
        const user = await User.findOne({
               email: email,
               password: password, 
        })

        console.log(user); 

        // check if user found
        if (!user){
             return res.status(404).json({ message: 'User not found!' })
        }

        // check if password matches
        // if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ message: 'Incorrect password!' })

        // generate auth token
        const token = jwt.sign(JSON.stringify(user), process.env.KEY)
        
        console.log("user return ", token)
       
        return res.send( { ...{ user }, ...{ token } })

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.signupController = async (req,res) => {
    const { fullName, email, password } = req.body
    try {
        console.log("registering");
        const user = await User.create({
            fullName: fullName,
            email: email, 
            password: password,
        })
        console.log("user", user);
        const token = jwt.sign(JSON.stringify(user), process.env.KEY)
        
        console.log("user return ", token)
    
        return res.send( { ...{ user }, ...{ token } })
        
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    } 
}


exports.currentUser = async (req,res) => {

    console.log("current user", req.user); 
    const user = await User.findById(req.user._id); 

    console.log("curr user", user);
    const token = jwt.sign(JSON.stringify(user), process.env.KEY)
        
    console.log("user return ", token)
   
    return res.send( { ...{ user }, ...{ token } })

}






const generateToken = (user) => {
    console.log("kesadfy", process.env.KEY)
    const token = jwt.sign(user, process.env.KEY)

    console.log("token", token); 
    return { ...{ user }, ...{ token } }
}


