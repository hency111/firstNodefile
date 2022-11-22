const express = require("express");

const route = express.Router();

const postController = require('../controllers/postController');


// console.log("post routing is ruuning");
route.get('/',postController.post);

route.post('/AddStudent',postController.AddStudent);

route.get('/deleteRecord/:id', postController.deleteRecord);

route.get('/updateRecord', postController.updateRecord);

route.post('/EditStudent', postController.editStudent);

route.get('/showData',postController.showData);

route.use('/comment',require('./comment'));

module.exports = route;

// index.js
//  /
// college.js 
//   /
// student.js 
//   - /addStudent 
//   - /