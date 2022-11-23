require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');

const port =  process.env.PORT || 8081;
const app = express();

const path = require('path');

mongoose.connect(process.env.DATABASE, {
    userNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("db connected");
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use('/uploads', express.static(path.join(__dirname,'/uploads')));
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("server is not run");
        return false;
    }
    console.log("server is running on port:",port);
})