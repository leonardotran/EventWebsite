const mongoose = require('mongoose'); 




const userSchema = mongoose.Schema({
    fullName: {
        type:String, 
    },

    email: {
        type: String, 
        unique : true
    },
    password: {
        type: String, 
    }
});


const User = mongoose.model('User', userSchema); 

module.exports = User