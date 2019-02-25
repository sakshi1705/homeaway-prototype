import React, { Component } from 'react';
import Navbar_new from "./navbar_new";
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

class Logint extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            login: false
        }
       
      
        
    }
    usernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    submitLogin = (e) => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
      
        axios.defaults.withCredentials = true
            axios.post('http://localhost:3001/login', data)
                .then(response => {
                    console.log("Status Code : ", response.status);
                    if (response.status === 200) {
                       
                        this.setState({
                            login: true
                        })
                    } 
                });
        
    }
  
    render(){
        let redirectVar = null;
        if (!cookie.load('cookie')) {
            console.log("hello");
            redirectVar = <Redirect to="/Login" />
        }
        else if (this.state.login) {
          
            redirectVar = <Redirect to="/home" />
        }
       
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
                <h3> Owner Login </h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" value={this.state.username} onChange={this.usernameChangeHandler} placeholder="Email Address"  />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" value={this.state.password} onChange={this.passwordChangeHandler} placeholder="Password"  />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login" onClick={this.submitLogin}/>
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
    }}
    export default Logint;