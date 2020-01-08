import React, { Component } from 'react';
import  styled from 'styled-components';
import { toast } from 'react-toastify';
import RitHeader from './RitadelLogoHeader';

import { Link } from 'react-router-dom';
import axios from 'axios';
import pattern from '../../assets/img/pattern.jpg';
 
export const LoginSigupWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: -webkit-linear-gradient(right top, rgba(199,53,56,1), rgba(245,133,41,0.8)), url(${pattern}) no-repeat;
    background-size: cover;
`;

export const LoginSigupDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 90vh;
    background-color: rgba(202, 227, 189, 0.16);
    border-radius: 20px;
    color: #fff;
    
    h1{
        font-size: 3em;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        // background-color: #000;
        width: 90%;
        
        input{
            color: #fff;
            margin-top: 40px;
            background: none;
            outline: none;
            border: none;
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            font-size: 1.2em;
            width: 80%;

            ::placeholder {
                color: #fff;
            }
            
        }

        button{
            outline: 0;
            border: none;
            margin: 20px auto;
            padding 0 15px;
            border-radius: 2px;
            height: 36px;
            font-size: 16px;
            background-color: #26a69a;
            text-align: center;
            letter-spacing: .5px;
            color: #fff;
            cursor: pointer;
            
            &:hover {
                background-color: #74ac33;
            }
        }
    }
    p{
        margin-top: 40px;
    }
    a{
        color: #fff;
    }
`;
export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // To handle the Login form Submit Event
    submit = async (e) => {
        e.preventDefault();

        try {
             //Our Backend is Expecting and email and Password, Using axios here to send the email and password to our Express API
            const pRequest = await axios.post('/api/auth', { "email": this.state.email, "password": this.state.password });

             // Making use of the session storage in the brower here to store the token given to us by the Server
            sessionStorage.setItem('ritadeltoken', pRequest.headers.ritadeltoken);
            //Emptying all the data in the state because we have gotten the data we need
            this.setState( { email: '', password: '' });

            sessionStorage.setItem( 'currentUser', pRequest.data);
            window.location.assign("/usermenu");
            
        } catch (error) {

            if (error.response.status === 400) {
                toast.error('Invalid email or password.');
            }else{
                return console.log(error);
            }
            
        }

       
       

       

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
            <LoginSigupWrap>

                <LoginSigupDiv>

                    <RitHeader />
                        <h1>Log In</h1>
                        <form onSubmit = { this.submit } >
                            
                            
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
                                
                         <button type="submit">Log in </button> 
                            <p>Are you a new user? &nbsp;<Link to="/register" className="frmparag">Sign up</Link></p>
                        </form>
                </LoginSigupDiv>
            </LoginSigupWrap>
        );
    }
}
