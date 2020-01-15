import * as OrderActionTypes from '../actiontypes/order';
import axios from 'axios';


export const forwardOrder = array => dispatch => {

    const sendallIds = async (id)  => {
         await axios.post('/api/orders/' + id, {}, 
        {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        }
    
        );
    }

    array.forEach( sendallIds);
};

export const getOrders = () => async dispatch => {
    const res = await axios.get('/api/orders', {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
        });
    
    dispatch({ type: OrderActionTypes.GET_ORDERS, payload: res.data});
   
};
