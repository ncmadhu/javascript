// Author: Madhu Chakravarthy
// Date: 01-08-2017

var express =  require('express');
var router =  express.Router();

var users = require('./models/users');

var isAuthenticated =  function (req, res, next) {

}

module.exports = function() {

    // Get Login Page

    router.get('/', function (req, res) {

        res.render('login')

    });

    router.post('/', function (req, res) {
        console.log(req.body)
        res.render('main')
    });

    router.get('/signup', function (req,res) {

        res.render('signup')
    });

    router.post('/signup', function (req,res) {

        var newUser = {}

        newUser.username = req.body.username
        newUser.password =  req.body.password
        newUser.email = req.body.email

        users.addUser(newUser);

        res.render('signup')
    });

    return router
}
