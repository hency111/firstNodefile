const monoogse = require('mongoose');

monoogse.connect('mongodb://127.0.0.1/RNW8');

const db = monoogse.connection;



db.once('open', function(err){
    if(err){
        console.log("db not connected");
        return false;
    }
    console.log("db is connected");
})

module.exports = db;