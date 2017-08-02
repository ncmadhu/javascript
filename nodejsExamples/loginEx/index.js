// Author: Madhu Chakravarthy
// Date: 01-08-2017

var http =  require('http')
var express = require('express')
var path = require('path')
var routes =  require('./routes')()
var bodyParser =  require('body-parser')
var multer = require('multer')
var upload = multer()

var passport =  require('passport')
var cookieParser =  require('cookie-parser')
var expressSession =  require('express-session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static Files setup
app.use(express.static(path.join(__dirname, 'public')));

// For parsing cookies
app.use(cookieParser());

// For parsing application/json
app.use(bodyParser.json())

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}))

// For parsing multipart/form-data
app.use(upload.array());

// Session Management
app.use(expressSession({
    secret: "madhutest",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    res.locals.session =  req.session
    next();
});


app.use("/", routes)

var server =  http.createServer(app)

server.listen(9090, 'localhost') 




