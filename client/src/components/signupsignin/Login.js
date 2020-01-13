import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as UserActionCreators from '../../actions/user';
import { Link } from 'react-router-dom';
import  styled from 'styled-components';
import { connect } from 'react-redux';

import RitHeader from './RitadelLogoHeader';
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

    @media(max-width: 768px){
        width: 98%;
    }
    
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

class Login extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    state = {
        email: '',
        password: '',
        isLoggingIn: false,
    }

    // To handle the Login form Submit Event
    submit = async (e) => {
        e.preventDefault();
        this.setState({ ...this.state, isLoggingIn: true});
        await this.props.loginUser(this.state.email, this.state.password);
        this.setState({ ...this.state, isLoggingIn: false });
    }

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
                                
                         <button type="submit">  { this.state.isLoggingIn ? 'Logging in' : 'Log in' }  </button> 
                            <p>Are you a new user? &nbsp;<Link to="/register" className="frmparag">Sign up</Link></p>
                        </form>
                </LoginSigupDiv>
            </LoginSigupWrap>
        );
    }
}

const mapStateToProps = ({user}) => (
    {
        user
    }
);

const mapDispatchToProps = dispatch => (
    {
        loginUser: bindActionCreators(UserActionCreators.loginUser, dispatch)
    }
);

export default connect(mapStateToProps, mapDispatchToProps )(Login);
