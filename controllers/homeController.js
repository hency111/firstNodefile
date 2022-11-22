const student  = require('../model/Student');
module.exports.home = function(req,res) {
    student.find({},function(err,data){
        if(err){
            console.log("Record not found");
            return false;
        }
        return res.render('home',{
            'record' : data
        });
    })   
}


module.exports.contact = function(req,res){
    return res.render('contact');
}

