import React, { Component } from 'react'
import { Form, Input, InputGroup, InputGroupAddon ,Button} from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-brands'
import './login.css'

const loginModel = {
    username:''
    ,password:''
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state =loginModel;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name] : value });
        console.log(this.state);
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    handleforgot(event){
        event.preventDefault();
        console.log('The link was clicked.');
    }

    handlefacebook(event){
        event.preventDefault();
    }

    handletwitter(event){
        event.preventDefault();
    }

    handlegoogle(event){
        event.preventDefault();
    }

    handleline(event){
        event.preventDefault();
    }


    render() {
        return (
            <div className="limiter bglogin">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <Form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                            <span className="login100-form-title p-b-49">
                                <img src={'assets/image/logo.png'} className="rounded" alt="locus" />
                            </span>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button outline color="info" disabled><FontAwesomeIcon icon={["fas","user"]}/></Button>
                                </InputGroupAddon>
                                <Input type="text" id="username" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />                               
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button outline color="info" disabled> <FontAwesomeIcon icon={["fas","lock"]}/></Button>
                                </InputGroupAddon>
                                <Input type="password" id="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                            </InputGroup>  
                            <br/>
                            <div className="clearfix">   
                                <div className="float-right">
                                    <a href="about:blank" onClick={this.handleforgot}>Forgot Password?</a> &nbsp;                    
                                    <Button outline color="primary" ><FontAwesomeIcon icon={["fas","sign-in-alt"]}/> login</Button>
                                </div>                               
                            </div>   
                            <br/>                            
                            <div className="flex-c-m">
                                <a href="about:blank" className="login100-social-item bg1" onClick={this.handlefacebook}>
                                    <FontAwesomeIcon icon={["fab","facebook-f"]}/>
                                </a>
                                <a href="about:blank" className="login100-social-item bg2" onClick={this.handletwitter}>
                                    <FontAwesomeIcon icon={["fab","twitter"]}/>
                                </a>
                                <a href="about:blank" className="login100-social-item bg3" onClick={this.handlegoogle}>
                                    <FontAwesomeIcon icon={["fab","google"]}/>
                                </a>
                                 <a href="about:blank" className="login100-social-item bg4" onClick={this.handleline}>
                                    <FontAwesomeIcon icon={["fab","line"]}/>
                                </a>
                            </div>                      
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login