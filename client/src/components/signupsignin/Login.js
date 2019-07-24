import React, { Component } from 'react';
import RitHeader from './RitadelLogoHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // To handle the Login form Submit Event
    submit = async (e) => {
        e.preventDefault();

        //Our Backend is Expecting and email and Password, Using axios here to send the email and password to our Express API
        const pRequest = await axios.post('/api/auth', { "email": this.state.email, "password": this.state.password });

        // Making use of the session storage in the brower here to store the token given to us by the Server
        sessionStorage.setItem('ritadeltoken', pRequest.headers.ritadeltoken);

        //Emptying all the data in the state because we have gotten the data we need
        this.setState( { email: '', password: '' });

        sessionStorage.setItem( 'currentUser', pRequest.data);
        window.location.assign("/usermenu");

    };

    // To get the User Email Input
    onEmailChange = (e) => {
          const name = e.target.value;
          this.setState({ email: name });
    }

    // To get the User Password Input
    onPasswordChange = (e) => {
          const pass = e.target.value;
          this.setState({ password: pass });
    }

    render() { 
        return (
            <div className="meal_table">
        <RitHeader />

        <section>
            <form onSubmit = { this.submit } >
            <h1>Log In</h1>
            
                <input 
                type="email"
                 name="email" 
                 value={ this.state.email } 
                 onChange={ this.onEmailChange }
                 placeholder="Email" 
                 />

                <input 
                type="password" 
                name="password"
                value = { this.state.password } 
                onChange={ this.onPasswordChange }
                placeholder="Password" 
                /> 
                 
            <button type="submit" className="btn">Log in </button> 
                <p className="new-user">Are you a new user? &nbsp;<Link to="/register" className="frmparag">Sign up</Link></p>
            </form>
        </section>
            </div>
        );
    }
}