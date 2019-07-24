import * as AdminMenuActionTypes from '../actiontypes/adminMenu';
import { GET_MEALS } from '../actiontypes/meal';
import axios from 'axios';

export const getMealsfromDbAsMenu = () => async dispatch => {

     const res = await axios.get('/api/meals', {
        headers: {
            ritadelToken: sessionStorage.getItem('ritadeltoken')
        }
     });

     dispatch({ type: GET_MEALS, payload: res.data });
    
   
};

export const postMeal = (id) => async dispatch => {

    const res = await axios.post('/api/menu/' + id, {}, 
    {
        headers: {
            ritadelToken: sessionStorage.getItem('ritadeltoken')
        }
    }

    );
    
    console.log(res);
    // dispatch({ type: AdminMenuActionTypes.POST_ITEM, id });

};

export const clearMenu = () => {
    return {
        type: AdminMenuActionTypes.CLEAR_MENU
    };
};

