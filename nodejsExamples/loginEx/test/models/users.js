// Author: Madhu Chakravarthy
// Date: 08-08-2017

var testCase =  require('mocha').describe;
var assertions =  require('mocha').it;
var assert =  require('chai').assert;

var users =  require('../../models/users.js')

testCase("Add users test", function() {
    assertions("It should add a new user to the file", function() {
        userData = {"username":"madhu","password":"test","email":"madhu@madhu.com"}
        assert.equal(users.addUser(userData), true)
    });
});

