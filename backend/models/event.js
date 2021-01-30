const mongoose = require('mongoose'); 




const eventSchema = mongoose.Schema({
    rating: {
        type: String, 
    },
    eventname: {
        type: String, 
    },
    title: {
        type: String, 
    },
    thumbnailUrl: {
        type: String, 
    },
    detail: {
        type: String, 
    },
    host: {
        type: Array, 
    },
    date_time: {
        type: Date, 
    },
    location: {
        type: Object, 
        latlon:{
            type: String,
        },
        address:{
            type: String,
        }
    }

});


const Event = mongoose.model('events', eventSchema); 
module.exports = Event