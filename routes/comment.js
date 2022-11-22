const express = require('express');

const route = express.Router();

const commentController = require('../controllers/commentController');


route.get('/', commentController.comment);

route.get('/AddComment', commentController.commentAdd);

module.exports = route;