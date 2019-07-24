import * as MenuActionTypes from '../actiontypes/menu';

const initialState = [ ];

export default function menu(state=initialState, action) {
    switch(action.type) {
        case MenuActionTypes.GET_MENU:
                const Menu = action.payload;
                return Menu;
       
            default:
                return state;
    }
}