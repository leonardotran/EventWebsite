const mongoose = require('mongoose'); 

const rankingSchema = new mongoose.Schema({
    user_id: {
        type: String, 
    },
    name: {
        type: String, 
    },
    photoUrl: {
        type: String, 
    },
    point: {
        type: String, 
    },
    atex_key: {
        type: String, 
    }
});


rankingSchema.set('collection', 'ranking');

const Ranking = mongoose.model('ranking', rankingSchema); 
module.exports = Ranking