import React, { Component } from 'react';
import Navbar_new from "./navbar_new";
import cookie from "react-cookies";
import {Redirect} from "react-router";
import home_img from "../images/home_img.jpg";

class Home extends Component {
    
handleLogout = () => {
    console.log("hello");
    cookie.remove("cookie",{path:"/"});
    return <Redirect to="/login"/>
}


    render() { 
        return (  
<React.Fragment>
<div className="home-image" >

<Navbar_new/>
<a href="/login" onClick={this.handlelogout} >Logout</a>
</div>
<br></br>
<br></br>
<br></br>

<div className="listpropimage">
<div className="jumbotron" style={{background:"transparent"}}>
    <h2 >Sakshi Tyagi</h2>
</div>

</div>
</React.Fragment>

        );
    }
}
 
export default Home;