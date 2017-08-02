// Author: Madhu Chakravarthy
// Date: 02-08-2017

var fs =  require('fs')
var jsonfile = require('jsonfile')
var validator =  require('jsonschema').Validator;
var schemaValidator =  new validator();
var userData = 'users.json'

var users = {
    "id": "/users",
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"},
        "email": {"type": "string"}
    }
};

var addUser =  function(userObj) {

    fs.stat(userData, function(err, stat) {
        if (err == null) {
            jsonfile.readFile(userData, function(err, obj) {
                if (err) {
                    console.log(err)
                } else {
                    if (checkUserExists(userObj.username, obj.users)) {
                        console.log("user already exists")
                    } else {
                        obj.users.push(userObj)
                        console.log(JSON.stringify(obj))
                        jsonfile.writeFile(userData, obj, function(err) {
                            if (err) {
                                console.error(err)
                            }
                        });
                    }
                }
            });
        } else {

            users = {"users" : [userObj]}

            jsonfile.writeFile(userData, users, function(err) {
                if(err) {
                    console.error(err)
                }
            });

        }
    });
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

       
