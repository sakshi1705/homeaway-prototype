import React, { Component } from 'react';
import Navbar_new from "./navbar_new";
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';





class Signup extends Component{
    render(){
        
        return(
            <React.Fragment>
            {redirectVar}
            <Navbar_new/>
        <div class="container login-container">
        <div class="row">
            <div class="col-md-6 image">
            <img alt = "owner login" src= "https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.35/images/cas/login-banner-sept16-1.png" />
                
            </div>
            <div class="col-md-6 login-form-2">
                <h3> Signup for HomeAway </h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.firstname} onChange={this.firstnameChangeHandler} placeholder="First name"  />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.lastname} onChange={this.lastnameChangeHandler} placeholder="last name"  />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.username} onChange={this.emailChangeHandler} placeholder="Email Address"  />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" value={this.state.password} onChange={this.passwordChangeHandler} placeholder="Password"  />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Signup" onClick={this.signup}/>
                    </div>
                    <div class="form-group">

                        <a href="#" class="ForgetPwd" value="Login">Forgot Password?</a>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </React.Fragment>
            )
        }
    }