var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var {mongoose} = require('./db/mongoose');
app.use(passport.initialize());



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var {users} = require('./models/user');
var Property= require('./models/Addpropertydetails')

var kafka = require('./kafka/client');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// Passport Config
require('./kafka-backend/config/passport')(passport);


app.post('/login/:username/:password', (req,res) =>{
    // User.findOne({
    //     email:req.params.username
    // }, function(err,user){
    //   console.log("user=",user);
    //           if (err) {
              
    //         res.code = "400";
    //         res.value = "The email and password you entered did not match our records. Please double-check and try again.";
    //         console.log(res.value);
    //         res.sendStatus(400).end(); 
    //     } else if(user && user.password == req.params.password){
         
    //         res.code = "200";
    //         // res.value = user;
    //         // res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
    //         // res.sendStatus(200).end();
    //         res.send("login successful")
    //     }
    //     else{
          
    //         console.log("invalid credentials");
    //         res.send("invalid credentials")
    //     }
    // })
    kafka.make_request('login', req.params, function (err, results) {
      if (err) {
        console.log("Inside err");
        res.json({
          status: "error",
          msg: "System Error, Try Again."
        })
      } else {
        console.log("Inside else");
        res.json({
          success: true,
          token: 'Bearer ' + results
        });
  
        res.end();
      }
  
    });
});

app.post('/register', function (req, res) {
  console.log(req.body);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      console.log('Email already exists');
      return res.status(400).json('Email already exists');
    } else {

      const newUser = new User({
        lastName: req.body.Lastname,
        firstName: req.body.Firstname,
        email: req.body.email,
        password: req.body.password
      });

      
          // newUser
          //   .save()
          //   .then(user => res.json(user))
          //   .catch(err => console.log(err));

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
       
      
    }
  });
  console.log("route end");
});
app.post('/AddpropertyDetails', function (req, res) {
  console.log(req.body);

   {

      const newProperty = new Property({
        city: req.body.city,
        state: req.body.state,
        code: req.body.code,
        address: req.body.address,
        country : req.body.country,
        type : req.body.type,
        bedroom : req.body.bedroom,
        bathroom : req.body.bathroom,
        price : req.body.price,
        night : req.body.night,
        stay : req.body.stay,
        accomodates : req.body.accomodates

      });

      
          newProperty
            .save()
            
       
      
    }
  });
  console.log("route end");

// app.post('/register', function (req, res, next) {
//   var user = {
//      firstname: req.body.firstname,
//      lastname: req.body.lastname,
//      email: req.body.email,
//      password: req.body.password
//  };
//  var users = mongoose.model('users', RegSchema);
//  users.create(user, function(err, newUser) {
//     if(err) return next(err);
//     req.session.user = email;
//     return res.send('Logged In!');
//  });
// });
// app.post('/register',(req,res)=>{
//   var newuser = new users({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//       email: req.body.email,
//     password: req.body.password
//   });

//   newuser.save().then((newuser)=>{
//       console.log("user registered : ",newuser);
//       res.sendStatus(200).end();
//   },(err)=>{
//       console.log("Error Creating ");
//       res.sendStatus(400).end();
//   })
// })







//Adding database storage
//var mysql = require('mysql');
//Adding connection pool
//var pool = require('./pool');

//use cors to allow cross origin resource sharing
//app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


//app.use(bodyParser.urlencoded({
  //  extended: true
 // }));
//app.use(bodyParser.json());

//Allow Access Control
//app.use(function (req, res, next) {
  //  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //  res.setHeader('Access-Control-Allow-Credentials', 'true');
   // res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  //  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //  res.setHeader('Cache-Control', 'no-cache');
   // next();
//});

//Route to handle Post Request Call
//app.post('/login', function (req, res) {
  //  console.log("Inside iusdbisudbsiub Post Request");
   // var username = req.body.username;
   // var password = req.body.password;

 

  //  var sql = "SELECT *  FROM login WHERE username = " +
   //     mysql.escape(username) + " and password = " + mysql.escape(password);
//console.log(sql);
        
  //  pool.getConnection(function (err, con) {
     //   if (err) {
       //     console.log(err);
         //   res.writeHead(400, {
          //      'Content-Type': 'text/plain'
          //  })
          //  console.log("Could Not Get Connection Object");
          //  res.end("Could Not Get Connection Object");
     //   } else {
           
        //    con.query(sql, function (err, result) {
         //       console.log(result)
          //      if (err) {
           //         console.log('Wrong Credentials Entered');
           //         res.writeHead(401, {
            //            'Content-Type': 'text/plain'
            //        })
             //       res.end(err);
             //   } else {
             //       if( result == ""){
                        
                        
              //          console.log("Wrong Credentials Entered");
               //         res.end("Wrong Credentials Entered");
               //     }
              //      else{
                       
               //     res.cookie('cookie',username, { maxAge: 900000, httpOnly: false, path: '/' });
                   
                //    res.writeHead(200, {
                //        'Content-Type': 'text/plain'
              //      })
               //     console.log("Successful Login");
               //     res.end("Successful Login");
            //    }
           //     }
          //  });
    //    }
 //   });

//});




// app.post('/login', function (req, res) {
//     console.log("Inside Login Post Request");
//     var username = req.body.username;
//     var password = req.body.password;

 

//     var sql = "SELECT *  FROM login WHERE username = " +
//         mysql.escape(username) + " and password = " + mysql.escape(password);

        
//     pool.getConnection(function (err, con) {
//         if (err) {
//             res.writeHead(400, {
//                 'Content-Type': 'text/plain'
//             })
//             console.log("Could Not Get Connection Object");
//             res.end("Could Not Get Connection Object");
//         } else {
           
//             con.query(sql, function (err, result) {
//                 if (err) {
//                     console.log('Wrong Credentials Entered');
//                     res.writeHead(401, {
//                         'Content-Type': 'text/plain'
//                     })
//                     res.end(err);
//                 } else {
//                     if( Object.keys(result).length === 0){
//                         res.end("Wrong Credentials Entered");
//                     }
//                     else{
                       
//                     res.cookie('cookie',username, { maxAge: 900000, httpOnly: false, path: '/' });
                   
//                     res.writeHead(200, {
//                         'Content-Type': 'text/plain'
//                     })
//                     console.log("Successful Login");
//                     res.end("Successful Login");
//                 }
//                 }
//             });
//         }
//     });

// });


//app.post('/signupr', function (req, res) {
 //   console.log("Inside Post Request");
 //   var email = req.body.email;
  //  var password = req.body.password;
  //  var firstName = req.body.firstName;
  //  var lastName = req.body.lastName;

  //  var sql = "INSERT INTO usersTable (`email`, `password`, `firstName`, `lastName`) VALUES (" +mysql.escape(email)+ "," +
  //  mysql.escape(password) +","+mysql.escape(firstName)+"," +
  //  mysql.escape(lastName)+")";
  //  pool.getConnection(function (err, con) {
//     if (err) {
  //          res.writeHead(400, {
   //             'Content-Type': 'text/plain'
   //         })
     //       res.end("Could Not Get Connection Object");
     //   } else {
      //      con.query(sql, function (err, result) {
        //        if (err ) {
           //         res.writeHead(401, {
            //            'Content-Type': 'text/plain'
            //        })
             //       res.end("Error");
             //   } else {
            //        res.writeHead(200, {
             //           'Content-Type': 'text/plain'
              //      })
              //      res.end("Success");
             //   }
          //  });
      //  }
   // });

//});
// app.post('/register',(req,res)=>{
//   var book = new Books({
//       bookID : req.body.bookID,
//       title : req.body.title,
//       author : req.body.author
//   });

//   book.save().then((book)=>{
//       console.log("Book created : ",book);
//       res.sendStatus(200).end();
//   },(err)=>{
//       console.log("Error Creating Book");
//       res.sendStatus(400).end();
//   })
// })


app.listen(3001);
console.log("Server listening on port 3001");