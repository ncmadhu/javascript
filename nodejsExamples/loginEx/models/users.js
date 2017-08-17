// Author: Madhu Chakravarthy
// Date: 02-08-2017

var fs =  require('fs')
var jsonfile = require('jsonfile')
var validator =  require('jsonschema').Validator;
var schemaValidator =  new validator();
var usersDataFile = 'users.json'

var users = {
    "id": "/users",
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"},
        "email": {"type": "string"}
    }
};

var writeJsonFile =  function(fileName, data) {

    jsonfile.writeFile(fileName, data, function(err) {
        if (err) {
            console.error(err)
            return false
        } else {
            return true
        }
    });

}

var readJsonFile =  function(fileName) {

    return new Promise(function(resolve, reject) {

        jsonfile.readfile(fileName, function(err, data) {
            
            if (err) {
                return reject(err)
            }

            return resolve(data)
        });
    });
}

var checkFileExists = function(fileName) {

    return new Promise(function(resolve, reject) {
        
        fs.stat(usersDataFile, function(err, result) {

            if (err) {
                return reject(err)
            }

            return resolve(true)
        })
    })
}


var addUser =  function(userObj) {

    fs.stat(usersDataFile, function(err, stat) {
        if (err == null) {
            console.log("File exists")
            usersData =  readJsonFile(usersDataFile)
            console.log(JSON.stringify(usersData))
            console.log("File content")
            if (usersData != null) {
                if (checkUserExists(userObj.username, usersData.users)) {
                    console.log("user already exists")
                    return false
                } else {
                    return writeJsonFile(usersDataFile, usersData)
                }
            } else {
                console.log("Empty file")
                return false
            }
        } else {
            usersData = {"users" : [userObj]}
            return writeJsonFile(usersDataFile, usersData)
        }
    });
    console.log("Exiting")

}

var checkUserExists =  function(username, users) {

    for (var i=0; i < users.length; i++) {
        user = users[i]
        if (user.username == username) {
            return true
        }
    }
    return false

}

module.exports = {
    addUser: addUser
}

       
