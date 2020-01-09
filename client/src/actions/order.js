import * as OrderActionTypes from '../actiontypes/order';
import axios from 'axios';


export const forwardOrder = array => dispatch => {

    const sendallIds = async (id)  => {


        const res = await axios.post('/api/orders/' + id, {}, 
        {
            headers: {
                ritadelToken: localStorage.getItem('ritadeltoken')
            }
        }
    
        );
        
        console.log(res.data);
        

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
