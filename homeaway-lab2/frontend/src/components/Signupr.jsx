import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

import axios from 'axios';

class Signupr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            firstName:"",
            lastName:"",
            authFlag: false
        }
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    submitLogin = (e) => {
        var headers = new Headers();
        e.preventDefault();
        const data = {
            email: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/signupr', data)
                .then(response => {
                    console.log("Status Code : ", response.status);
                    if (response.status === 200) {
                        this.setState({
                            authFlag: true
                        })
                    } else if (response.status === 401) {
                        this.setState({
                            authFlag: false
                        })
                    }
                });
    }
    componentWillMount() {
        this.setState({
            authFlag: false
        })
    }
    usernameChangeHandler = ( e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    firstNameChangeHandler = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    lastNameChangeHandler = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    
    render() {
        let redirectVar = null;
        if (this.state.authFlag) {
            redirectVar = <Redirect to="/" />
        }
        else if (!cookie.load('cookie')) {
            redirectVar = <Redirect to="/signupr" />
        }
        
        return (
            <div>{redirectVar}

                <div class="container login-container">
                    <div class="row login-form">
                        <div class="col-md-6 image">
                            <img alt="HomeAway logo" class="site-header-logo__img img-responsive"
                                role="presentation" src="https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.35/images/cas/login-banner-sept16-1.png">
                            </img>
                        </div>
                        <div class="col-md-6">
                            <h3>Owner Registration</h3>
                            <hr />
                            <form>
                                <div class="form-group">
                                    <input type="text" refs="username" onChange={this.usernameChangeHandler.bind(this)} placeholder="Your Email" ></input>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="password" onChange={this.passwordChangeHandler.bind(this)} placeholder="Your Password" ></input>
                                 
                                </div>
                                <div class="form-group">
                                    <input type="text" refs="firstName" onChange={this.firstNameChangeHandler.bind(this)} placeholder="Your First Name" ></input>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="text" refs="lastName" onChange={this.lastNameChangeHandler.bind(this)} placeholder="Your Last Name" ></input>
                                  
                                </div>
                                <div class="form-group">
                                    <input onClick={this.submitLogin} type="submit" class="btnSubmit" value="Login" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signupr;

