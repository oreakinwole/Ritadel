import * as AdminMenuActionTypes from '../actiontypes/adminMenu';
import { GET_MEALS } from '../actiontypes/meal';

const initialState = [];

export default function adminMenu(state=initialState, action) {

    switch(action.type) {
        case GET_MEALS:
            return action.payload;

       /*  case AdminMenuActionTypes.REMOVE_ITEM:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]; */

        case AdminMenuActionTypes.CLEAR_MENU:
            let array = state.slice();
            array.length = 0;
            return array;

        case AdminMenuActionTypes.DO_ISPOSTED:
            const posted = state.slice().filter(admenuthing => action.payload.find(usermenuthing => usermenuthing.mealItem._id === admenuthing._id));
            const postedIds = posted.map(item => item._id);
            
            return state.map(stuff => {
                if(postedIds.includes(stuff._id)){
                    return {
                        ...stuff,
                        isPosted: true
                    };
                }
                return stuff;
            });
  
            default:
                return state;
    }
}
