
const User  = require('../../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');



function handle_request(msg, callback){
    var res = {};
    console.log("In handle request:"+ JSON.stringify(msg));
    // mongo.connect(function(err,db){
    //     if(err){
    //         callback(null,"Cannot connect to db");
    //     }
    //     else{
    //         console.log('Connected to mongodb');
    //         var query = {Email : msg.username};
    //         var dbo = db.db('usersignup');
    //         dbo.collection("usersignup").find(query).toArray(function(err,result){
    //             if(err){
    //                 //throw err;
    //                 callback(err,"Error");
    //             }
    //             if(result.length > 0){
    //                 var hash = result[0].Password;
    //                 bcrypt.compare(msg.password,hash,function(err,doesMatch){
    //                     if(doesMatch){
    //                         console.log("Inside result.length",result[0].userID);
                          
    //                         callback(null,result);
    //                     } else {
    //                         callback(null,[]);
    //                     }
    //                 });
    //             }
    //             else{
    //                 callback(null,[]);
    //             }
    //         });
    //     }
    // });
    const password = msg.password;
    User.findOne({
        email:msg.username
    }).then(user => {
        if (!user) {
            //errors.email = 'User not found';
            // return res.status(404).json("User Not found");
            callback(null, "User Not Found");
        }
        console.log("USER");
        console.log(user);
        bcrypt.compare(password, user.password).then(isMatch => {
            console.log("ISMATCH");
            console.log(isMatch);
            if (isMatch) {
                // User Matched
                const payload = { id: user.id, email: user.email, firstName: user.firstName }; // Create JWT Payload
                console.log(payload);
                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        // res.json({
                        //     success: true,
                        //     token: 'Bearer ' + token
                        // });
                        callback(null, token);
                    }
                );
            } else {
                //errors.password = 'Password incorrect';
                // return res.status(400).json("Password incorrect");
                callback(null, "Password incorrect");
            }
        });
    })
    // function(err,user){

    //   console.log("user=",user);
    //           if (err) {
              
    //         // res.code = "400";
    //         // res.value = "The email and password you entered did not match our records. Please double-check and try again.";
    //         // console.log(res.value);
    //         // res.sendStatus(400).end(); 
    //         callback(null,"The email and password you entered did not match our records. Please double-check and try again.");
    //     } else if(user && user.password == req.params.password){
         
    //         res.code = "200";
    //         // res.value = user;
    //         // res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
    //         // res.sendStatus(200).end();
    //         callback(null,"login successful");
    //     }
    //     else{
          
    //         console.log("invalid credentials");
    //         res.send("invalid credentials")
    //     }
    // })
    

}



exports.handle_request = handle_request;