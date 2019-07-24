import axios from 'axios';
import * as UserActionTypes from '../actiontypes/user';


export const getUser = async () => {
 
    const getUser  = await axios.get ('/api/users/me');
    

    return {
        
            type: UserActionTypes.GET_USER, 
            payload: getUser 
    };
};
