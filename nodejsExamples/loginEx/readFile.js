var jsonfile =  require('jsonfile')
var fs =  require('fs')
var usersDataFile = 'users.json'

var readJsonFile =  function(fileName) {

    return new Promise(function(resolve, reject) {
        jsonfile.readFile(fileName, function(err, data) {
            if (err) {
                return reject(err)
            }
            return resolve(data)
        });
    });
}

var writeJsonFile =  function(fileName, data) {

    return new Promise(function(resolve, reject) {
        jsonfile.writeFile(fileName, data, function(err) {
            if (err) {
                return reject(err)
            }
            resolve()
        });
    });
}

var checkFileExists = function(fileName) {

    return new Promise(function(resolve, reject) {
        fs.stat(fileName, function(err, result) {
            if (err) {
                return reject(err)
            }
            return resolve()
        })
    })
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

var updateUserData =  function(newUserData) {

    return new Promise(function(resolve, reject) {
        readJsonFile(usersDataFile).then(function(usersData) {
            if(checkUserExists(newUserData.username, usersData.users)) {
                reject("User already exists")
            } else {
                console.log(JSON.stringify(usersData))
                usersData.users.push(newUserData)
                resolve(usersData)
            }
        }, function(err) {
            reject(err)
        })
    });
}

var addUserAsync =  function(userData) {

    checkFileExists(usersDataFile)
    .then(function() {
        return updateUserData(userData)
    }, function() {
        usersData = {"users" : [userData]}
        return usersData
    })
    .then(function(data) {
        return writeJsonFile(usersDataFile, data)
    })
    .catch(function(err) {
        console.log(err)
        return false
    })
    console.log("Exiting")
    return true
       
}

var addUser = function(userData) {
    return await(addUserAsync(userData))
}
userData = {"username":"AAmadhu","password":"test","email":"madhu@madhu.com"}
addUser(userData)
