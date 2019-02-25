import React, { Component } from 'react';
import Navbar_new from "./navbar_new";
import cookie from "react-cookies";
import {Redirect} from "react-router";

class Home extends Component {
    
handleLogout = () => {
    console.log("hello");
    cookie.remove("cookie",{path:"/"});
    return <Redirect to="/login"/>
}


    render() { 
        return (  
<React.Fragment>
<Navbar_new/>
<a href="/login" onClick={this.handlelogout} >Logout</a>
</React.Fragment>

        );
    }
}
 
export default Home;