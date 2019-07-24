import * as OrderActionTypes from '../actiontypes/order';


export default function orders(state = [], action) {
    switch(action.type) {

        case OrderActionTypes.GET_ORDERS:
            return action.payload;

            default:
                return state;
    }
}