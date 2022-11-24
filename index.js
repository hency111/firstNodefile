require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();

const path = require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/uploads', express.static(path.join(__dirname,'/uploads')));
app.use('/',require('./routes'));
mongoose.connect("mongodb+srv://jaydeepCollege:Sg9rbcTGEIuv1c4f@cluster0.36fufoj.mongodb.net/college?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("db connected");
});


mongoose.connection.once('open', function(){
    console.log("connection been made");
}).on('error', function(error){
    console.log("error is"+error)
});

const port =  process.env.PORT || 8081;
app.listen(port,function(err){
    if(err){
        console.log("server is not run");
        return false;
    }
    console.log("server is running on port:",port);
})