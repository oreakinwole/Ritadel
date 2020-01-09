import * as MenuActionTypes from '../actiontypes/menu';
import axios from 'axios';

export const getMenu = () => async dispatch => {

    const res = await axios.get('/api/menu',  {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
    });
  
    dispatch({ type: MenuActionTypes.GET_MENU, payload: res.data});

};

export const sendOrder = (id, index) => async dispatch => {

    await axios.post('/api/orders/' + id, {}, 
    {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
    }

    );
    
    dispatch({ type: MenuActionTypes.SEND_ORDER, index });

};
