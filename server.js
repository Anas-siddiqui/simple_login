var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');


var port = process.env.PORT || 8080;

var path = require('path');
// get our request parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));



app.use(express.static('public'));



app.get('/login', function (req, res) {
    res.sendfile(__dirname + '/public/login.html');
});
// bundle our routes
var apiRoutes = express.Router();

// create a new user account (POST http://localhost:8080/api/signup)

apiRoutes.get('/signup', function (req, res) {
    res.json({
        success: true,
        msg: 'Successful created new user.'
    });
    /*
  if (!req.body.name || !req.body.password) {
    res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
    */
});



apiRoutes.post('/authenticate', function (req, res) {

    if (req.body.email == "test" && req.body.password == "test") {
        var token = '123445';
        res.json({
            success: true,
            access_token: token
        });
    } else if (req.body.email == "jim@jim.com" && req.body.password == "test") {
        var token = '234344';
        res.json({
            success: true,
            access_token: token
        });
    } else if (req.body.email == "mark@hotmail.com" && req.body.password == "test") {
        var token = '565678';
        res.json({
            success: true,
            access_token: token
        });
    } else {
        res.json({
            success: false
        });
    }

});













app.use('/api', apiRoutes);


app.listen(port);
console.log('http://localhost:' + port);
