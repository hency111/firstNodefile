const express = require('express');

const route = express.Router();

const homeController = require('../controllers/homeController');



route.get('/', homeController.home);

route.get('/contact', homeController.contact);

route.use('/post',require('./post'));

module.exports = route;