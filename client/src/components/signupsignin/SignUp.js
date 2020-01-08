import React, { Component } from 'react';
import RitHeader from './RitadelLogoHeader';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import {LoginSigupWrap, LoginSigupDiv} from './Login';

 
export default class SignUp extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    // To get the Username Input
    onUsernameChange = (e) => {
        const name = e.target.value;
        this.setState({ username: name });
    }

    // To get the User Email Input
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({ email: email });
    }
    
    // To get the User Password Input
    onPasswordChange = (e) => {
            const pass = e.target.value;
            this.setState({ password: pass });
    }

    // To get another Password Input to campare with the previous one
    onConfirmPasswordChange = (e) => {
            const cPass = e.target.value;
            this.setState({ confirmPassword: cPass });
    }

    // To handle the Singup Form Submit Event
    submit = async (e) => {
        e.preventDefault();

        //  To check if the password and confirm passwords match
        if (this.state.password !== this.state.confirmPassword) {
            toast.error('Your Passsword does not match, try again');
        }

        // Sending all the data for registering a user to the backend
        await axios.post('/api/users', { "username": this.state.username, "email": this.state.email, "password": this.state.password });
        this.setState( { username: '', email: '', password: '', confirmPassword: '' });

        toast.success('Registration Successful');

        // Redirecting to Login after Registration Completed at the server
        setTimeout(()=> window.location.assign("/"), 2000);

    };

    render() { 
        return (
            <LoginSigupWrap>
                <LoginSigupDiv>
                <RitHeader />
                <h1>Sign Up</h1>
                    <form onSubmit = { this.submit }>
                    
                        <input
                            type="text"
                            name="username"
                            value = { this.state.username } 
                            onChange={ this.onUsernameChange }
                            placeholder="Username"
                            className="frminput"
                        />
                        <input
                            type="email"
                            name="email"
                            value={ this.state.email } 
                            onChange={ this.onEmailChange }
                            placeholder="Email"
                            className="frminput"
                        />
                        <input
                        type="password"
                        name="password"
                        value = { this.state.password } 
                        onChange={ this.onPasswordChange }
                        placeholder="Password"
                        className="frminput"
                        />  
                        <input
                            type="password"
                            name="confirm password"
                            value = { this.state.confirmPassword } 
                            onChange={ this.onConfirmPasswordChange }
                            placeholder="Confirm Password"
                            className="frminput"
                        />  
                        <button type="submit" className="btn">Sign up </button>
                        <p>Already have an account? &nbsp;<Link to="/">Log In</Link></p>
                    </form>
                    </LoginSigupDiv>
                </LoginSigupWrap>
        );
    }
}