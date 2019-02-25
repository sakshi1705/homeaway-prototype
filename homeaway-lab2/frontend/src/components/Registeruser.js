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
import { register } from "../actions/authActions";

class Registeruser extends Component{
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
            <input className="form-control" type={field.type} {...field.input} />
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        );
      }
    
    
    
      onSubmit(values) {
        console.log(values);
        
        this.props.register(values, (res) => {
            this.props.history.push("/home");
          
            });
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
            
                <div class="col-md-6 login-form-2">
                    <h3> Sign up for HomeAway </h3>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
              label="Firstname"
              name="Firstname"
              type = "text"
              component={this.renderField}
            />
    
            <Field
              label="Lastname"
              name="Lastname"
              type = "text"
              component={this.renderField}
            />
            <Field
              label="email"
              name="email"
              type = "text"
              component={this.renderField}
            />
            <Field
              label="password"
              name="password"
              component={this.renderField}
              type="password"
            />

                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Sign Me Up></button>
                        </div>
                        
                        
                    </form>
                </div>
                
        
            </React.Fragment>
                )
        }}
        // 
        
    
        export default reduxForm({
            form: "NewUserForm"
          })(connect(null, { register })(Registeruser));
