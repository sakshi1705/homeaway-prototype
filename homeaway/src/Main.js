import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from "./components/home";

import Logint from './components/Logint';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/login" exact component={Logint}/>
                <Route path="/home" exact component={Home}/>
               
               
                
            </div>
        );
    }
}
//Export The Main Component
export default Main;