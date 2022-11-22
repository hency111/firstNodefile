const student = require('../model/Student');

const fs = require('fs');

const path = require('path');

module.exports.post = function(req,res){
    return res.render('post');
}

module.exports.AddStudent = function(req,res){
    

    student.uploadedAvatar(req,res,function(err){
        console.log(req.body);
        console.log(req.file);
        if(req.file){   
            var name = req.body.name;
            var email = req.body.email;
            var password = req.body.password;
            var gender= req.body.gender;
            var hobby = req.body.hobby;
            var city = req.body.city;
            var des = req.body.description;
            var imagePath = student.avatarPath+"/"+req.file.filename;
            student.create({
                name: name,
                email : email,
                password : password,
                gender : gender,
                hobby : hobby,
                city : city,
                description : des,
                avatar : imagePath
            }, function(err,dataInsert){
                return res.redirect('/post/showData');
            })
        }
    })
}

module.exports.deleteRecord = function(req,res){
    // console.log(req.params.id);
    student.findById(req.params.id, function(err,record){
        if(err){
            console.log("record not found");
            return false;
        }
        fs.unlinkSync(path.join(__dirname,'..',record.avatar));
        if(record.avatar){
               
            student.findByIdAndDelete(req.params.id, function(err)
            {
                if(err)
                {
                    console.log("something wrong");
                    return false;
                }
                return res.redirect('back');
            })
        }
        else{
            return res.redirect('back');
        }
    })
   
}


module.exports.updateRecord = function(req,res){
    // console.log(req.query.stId);
    student.findById(req.query.stId, function(err,data){
        if(err){
            console.log("record not found");
            return false;
        }
        return res.render('updateHome',{
            'singleRecord' : data
        })
    })
}

module.exports.editStudent = function(req,res){
    student.uploadedAvatar(req,res,function(err){
        if(req.file)
        {
            student.findById(req.body.stu_id, function(err,updateRecord){
                if(err){
                    console.log("record not found");
                    return false;
                }
                // console.log(updateRecord.avatar);
                fs.unlinkSync(path.join(__dirname,'..',updateRecord.avatar));
                let newAvatar = student.avatarPath+'/'+req.file.filename;
               
                student.findByIdAndUpdate(req.body.stu_id,{
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password,
                    gender : req.body.gender,
                    hobby : req.body.hobby,
                    city : req.body.city,
                    description : req.body.description,
                    avatar : newAvatar
                },function(err,updatedrecord){
                    if(err){
                        console.log("record not updated");
                        return false;
                    }
                    return res.redirect('/post/showData');
                })
            })
        }
        else{
            student.findById(req.body.stu_id, function(err,record){
                if(err){
                    console.log("record not found");
                    return false;
                }
                 student.findByIdAndUpdate(req.body.stu_id,{
                        name : req.body.name,
                        email : req.body.email,
                        password : req.body.password,
                        gender : req.body.gender,
                        hobby : req.body.hobby,
                        city : req.body.city,
                        description : req.body.description,
                        avatar : record.avatar
                    },function(err,updatedrecord){
                        if(err){
                            console.log("record not updated");
                            return false;
                        }
                        return res.redirect('/post/showData');
                    })
            })
        }
        
    })
}


module.exports.showData = function(req,res){
    student.find({}, function(err,data){
        if(err){
            console.log('record not fetch from db');
            return false;
        }
        return res.render('showData',{
            'record' : data
        })
    });
}