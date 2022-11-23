const monoogse = require('mongoose');

monoogse.connect('mongodb+srv://jaydeepCollege:jaydeep@123@cluster0.36fufoj.mongodb.net/college');

const db = monoogse.connection;



db.once('open', function(err){
    if(err){
        console.log("db not connected");
        return false;
    }
    console.log("db is connected");
})

module.exports = db;