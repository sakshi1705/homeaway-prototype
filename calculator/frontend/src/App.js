import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/Keypad";
import axios from 'axios';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            const data = {
                result: this.state.result
                }
                console.log("dsts "+ data.result)
            axios.post('http://localhost:3001/validate', data)
            .then(response => {
            console.log("Status Code : ", response.status)
            console.log("After post call " + response.data);
            
            this.setState({
            result : response.data
        })
    });

    }
    
    


        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else { 


            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}
export default App;



