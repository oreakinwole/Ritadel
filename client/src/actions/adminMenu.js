import * as AdminMenuActionTypes from '../actiontypes/adminMenu';
import { GET_MEALS } from '../actiontypes/meal';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getMealsfromDbAsMenu = () => async dispatch => {
    try {
        const res = await axios.get('/api/meals', {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
     });

     dispatch({ type: GET_MEALS, payload: res.data });
    } catch (error) {
        error.response.status === 403 ? window.location.assign('/usermenu') : window.location.assign('/');
        return;
    }

};

export const postMeal = id => async dispatch => {
    try{
        await axios.post('/api/menu/' + id, {}, 
        {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        }
    )
     dispatch({type: AdminMenuActionTypes.POST_SUCCESS, payload: id});
    }catch(error) {
        if (error.response.status === 404) return toast.error('Invalid ID');
        
    }
};

/* export const removeMealFromMenu = id => async dispatch => {
    try{
        await axios.delte('/api/menu/' + id,
        {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        }
    )
    //  dispatch({type: AdminMenuActionTypes.POST_SUCCESS, payload: id});
    }catch(error) {
        return toast.error('Failed to delete');
        
    }
}; */

export const clearMenu = () => {
    return {
        type: AdminMenuActionTypes.CLEAR_MENU
    };
};

