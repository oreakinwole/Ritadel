import axios from 'axios';
import { toast } from 'react-toastify';
import * as UserActionTypes from '../actiontypes/user';


export const validateToken = () => async dispatch => {
    try{
        await axios.get ('/api/users/me', {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        });
        dispatch({ type: UserActionTypes.USER_TOKEN_VALID });

    } catch(error){
        if (error.response.status === 400) {
            dispatch({ type: UserActionTypes.USER_TOKEN_INVALID });
            toast.error('Your session has expired');
            return setTimeout(()=> window.location.assign('/'), 2000);
        }
    }
};

export const loginUser = (email, password) => async dispatch => {
    try{
        //Backend is Expecting and email and Password, Using axios here to send the email and password to our Express API
        const pRequest = await axios.post('/api/auth', { email: email, password: password });

        // Making use of the local storage in the browser here to store the token given to us by the Server
        localStorage.setItem('ritadeltoken', pRequest.headers.ritadeltoken);

        localStorage.setItem('currentUser', pRequest.data);
        dispatch({ type: UserActionTypes.LOGIN_SUCCESS });
        window.location.assign('/usermenu');
    
    } catch (error) {
        if (error.response.status === 400) {
            dispatch({ type: UserActionTypes.LOGIN_ERROR });
            return toast.error('Invalid email or password.');

        }else{
            dispatch({ type: UserActionTypes.LOGIN_ERROR });
            return toast.error(error);
        } 
    }
    
};
