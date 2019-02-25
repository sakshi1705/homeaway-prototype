import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from "./components/home";
import AddPropertyDetails from "./components/AddPropertyDetails";
import Logint from './components/Logint';
import Signupr from './components/Signupr';
import {Provider} from 'react-redux' ;
import store from './store' ;
import Registeruser from './components/Registeruser';


//Create a Main Component
class Main extends Component {
    render(){
        return( <Provider store ={store}>
            <div>
            <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Logint}/>
                <Route path="/home" exact component={Home}/>
                <Route path = "/AddPropertyDetails" exact component = {AddPropertyDetails} />
                <Route path = "/register" exact component = {Registeruser} />
               
               
                
            </div>
            </Provider>
        );
    }
}
//Export The Main Component
export default Main;