import * as AdminMenuActionTypes from '../actiontypes/adminMenu';
import { GET_MEALS } from '../actiontypes/meal';

const initialState = [];

export default function adminMenu(state=initialState, action) {

    switch(action.type) {
        case GET_MEALS:
                const allTheMeals = action.payload;
                return allTheMeals;

       /*  case AdminMenuActionTypes.REMOVE_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]; */

        case AdminMenuActionTypes.CLEAR_MENU:
            let array = state.slice()
            array.length = 0
            return array;

            default:
                return state;
    }
}