import * as PreOrderActionTypes from '../actiontypes/preOrder';

export const sendOrders = array => {

    return {
        
            type: PreOrderActionTypes.SEND_ORDERS, 
            array
                         
    };
};

export const getOrders = () => {

    return {
        
            type: PreOrderActionTypes.GET_ORDERS
                         
    };
};