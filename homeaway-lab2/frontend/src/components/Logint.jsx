import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import Navbar_new from "./navbar_new";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

import { logint } from "../actions/authActions";



class Logint extends Component{
//     constructor() {
//         super();
//         this.state = {
//           username : '',
//           password : '',
//           errors: {}
//         };
    
        
//   }
renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;


    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }



  onSubmit(values) {
    console.log(values);
    
    this.props.logint(values, this.props.history);
    }
    
//   componentDidMount() {
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push('/home');
//     }

//   }
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//       this.props.history.push('/home');
//     }

//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }
  
//   submitLogin = (e) => {
//     e.preventDefault();
    

//     const userData = {
//       username: this.state.username,
//       password: this.state.password
//     };

//     this.props.loginUser(userData);
//   }

//   usernameChangeHandler = (e) => {
//     this.setState({
//         username: e.target.value
//     })
// }
// passwordChangeHandler = (e) => {
//     this.setState({
//         password: e.target.value
//     })
// }
    
  
    render(){
        const { handleSubmit } = this.props;
       return( 
            <React.Fragment>
            
            <Navbar_new/>
        <div class="container login-container">
        <div class="row">
            <div class="col-md-6 image">
            <img alt = "owner login" src= "https://csvcus.homeaway.com/rsrcs/stab-cms-resources/0.10.35/images/cas/login-banner-sept16-1.png" />
                
            </div>
            <div class="col-md-6 login-form-2">
                <h3> Owner Login </h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
          label="Username"
          name="username"
          component={this.renderField}
        />

        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />
                    <div class="form-group">
                        <button type="submit" class="btnSubmit">Log In></button>
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
    // 
    

    export default reduxForm({
        form: "NewBookForm"
      })(connect(null, { logint })(Logint));