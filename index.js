const express = require('express');

const port =  8081;
const app = express();

const path = require('path');
const db = require('./config/mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/uploads', express.static(path.join(__dirname,'/uploads')));
app.use('/',require('./routes'));
//hi

app.listen(port,function(err){
    if(err){
        console.log("server is not run");
        return false;
    }
    console.log("server is running on port:",port);
})