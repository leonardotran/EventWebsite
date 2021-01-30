const mongoose = require('mongoose'); 

const connectDatabase = () => {
        mongoose.connect('mongodb+srv://admin:admin15@atex.wzjjw.mongodb.net/AtexDatabase?retryWrites=true&w=majority', {

        
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database with host: ${con.connection.host}`);
    }).catch(err => {
        console.log(err);
    })
}


module.exports = connectDatabase;