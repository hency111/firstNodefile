const mongoose = require('mongoose');
const multer = require('multer');

const path = require('path');

const AVATAR_PATH = path.join('/uploads/images/');

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    hobby :
    {
        type : Array,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    description : {
        type :  String,
        required : true
    },
    avatar :{
        type : String,
        required : true
    }
});

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename : function(req,file,cb){
        cb(null, file.fieldname+"-"+Date.now());
    }
});

studentSchema.statics.uploadedAvatar = multer({storage : storage}).single('avatar');
studentSchema.statics.avatarPath= AVATAR_PATH;

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;