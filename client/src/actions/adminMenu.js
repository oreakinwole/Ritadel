import * as AdminMenuActionTypes from '../actiontypes/adminMenu';
import { GET_MEALS } from '../actiontypes/meal';
import axios from 'axios';

export const getMealsfromDbAsMenu = () => async dispatch => {

     const res = await axios.get('/api/meals', {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
     });

     dispatch({ type: GET_MEALS, payload: res.data });
   
};

export const postMeal = id => async dispatch => {
    await axios.post('/api/menu/' + id, {}, 
        {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        }
    );
};

export const clearMenu = () => {
    return {
        type: AdminMenuActionTypes.CLEAR_MENU
    };
};

