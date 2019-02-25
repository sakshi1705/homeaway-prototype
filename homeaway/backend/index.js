var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

//Adding database storage
var mysql = require('mysql');
//Adding connection pool
var pool = require('./pool');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//Route to handle Post Request Call
app.post('/login', function (req, res) {
    console.log("Inside Login Post Request");
    var username = req.body.username;
    var password = req.body.password;

 

    var sql = "SELECT *  FROM login WHERE username = " +
        mysql.escape(username) + " and password = " + mysql.escape(password);

        
    pool.getConnection(function (err, con) {
        if (err) {
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            console.log("Could Not Get Connection Object");
            res.end("Could Not Get Connection Object");
        } else {
           
            con.query(sql, function (err, result) {
                if (err) {
                    console.log('Wrong Credentials Entered');
                    res.writeHead(401, {
                        'Content-Type': 'text/plain'
                    })
                    res.end(err);
                } else {
                    if( Object.keys(result).length === 0){
                        res.end("Wrong Credentials Entered");
                    }
                    else{
                       
                    res.cookie('cookie',username, { maxAge: 900000, httpOnly: false, path: '/' });
                   
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    console.log("Successful Login");
                    res.end("Successful Login");
                }
                }
            });
        }
    });

});




app.post('/login', function (req, res) {
    console.log("Inside Login Post Request");
    var username = req.body.username;
    var password = req.body.password;

 

    var sql = "SELECT *  FROM login WHERE username = " +
        mysql.escape(username) + " and password = " + mysql.escape(password);

        
    pool.getConnection(function (err, con) {
        if (err) {
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            console.log("Could Not Get Connection Object");
            res.end("Could Not Get Connection Object");
        } else {
           
            con.query(sql, function (err, result) {
                if (err) {
                    console.log('Wrong Credentials Entered');
                    res.writeHead(401, {
                        'Content-Type': 'text/plain'
                    })
                    res.end(err);
                } else {
                    if( Object.keys(result).length === 0){
                        res.end("Wrong Credentials Entered");
                    }
                    else{
                       
                    res.cookie('cookie',username, { maxAge: 900000, httpOnly: false, path: '/' });
                   
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    console.log("Successful Login");
                    res.end("Successful Login");
                }
                }
            });
        }
    });

});


app.post('/signupr', function (req, res) {
    console.log("Inside Post Request");
    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;

    var sql = "INSERT INTO usersTable (`email`, `password`, `firstName`, `lastName`) VALUES (" +mysql.escape(email)+ "," +
    mysql.escape(password) +","+mysql.escape(firstName)+"," +
    mysql.escape(lastName)+")";
    pool.getConnection(function (err, con) {
        if (err) {
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err ) {
                    res.writeHead(401, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Error");
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Success");
                }
            });
        }
    });

});


app.listen(3001);
console.log("Server listening on port 3001");