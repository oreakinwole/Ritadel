import * as PreOrderActionTypes from '../actiontypes/preOrder';

const initialState = [ ];

export default function preOrder(state=initialState, action) {
    switch(action.type) {

        case PreOrderActionTypes.SEND_ORDERS:
            return action.array;

        case PreOrderActionTypes.GET_ORDERS:
            return state;

            default:
                return state;
    }
}