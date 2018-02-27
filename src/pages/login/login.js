import React, { Component } from 'react'
import { Form, Text } from 'react-form'

import './login.css'
import Bg01 from './bg-01.jpg'

// TODO Style
const bgStype ={
    color: 'blue',
    backgroundImage: 'url(' + Bg01 + ')',
};

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    render(){
        return (
            <div class="limiter">
                <div class="container-login100" style={bgStype}>
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <span class="login100-form-title p-b-49">
                            Login
                        </span>
                        <Form class>
                            <Text field="firstName" id="firstName" />
                        </Form>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Login