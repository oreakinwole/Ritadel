import * as OrderActionTypes from '../actiontypes/order';
import axios from 'axios';


export const forwardOrder = array => dispatch => {

    const sendallIds = async (id)  => {


        const res = await axios.post('/api/orders/' + id, {}, 
        {
            headers: {
                ritadelToken: sessionStorage.getItem('ritadeltoken')
            }
        }
    
        );
        
        console.log(res.data);
        

    }


    array.forEach( sendallIds);

    alert('Your Order has been submitted! Thank You');
   
};

export const getOrders = () => async dispatch => {

    const res = await axios.get('/api/orders', {
        headers: {
            ritadelToken: sessionStorage.getItem('ritadeltoken')
        }
        });
    
    dispatch({ type: OrderActionTypes.GET_ORDERS, payload: res.data});
   
};
