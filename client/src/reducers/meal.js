import * as MealActionTypes from '../actiontypes/meal';


const initialState = [ ];

export default function meal(state=initialState, action) {

    switch(action.type) {

        case MealActionTypes.GET_MEALS:
                const allTheMeals = action.payload;
                return allTheMeals;
    
        case MealActionTypes.ADD_MEAL:
            return [
            ...state,
            {
                name: action.name,
                price: action.price
            }
        ];

        case MealActionTypes.REMOVE_MEAL:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        
        case MealActionTypes.UPDATE_MEAL:
            return state.map((meal, index)=> {
                if(index === action.index) {
                    return {
                        ...meal,
                        name: action.name,
                        price: action.price
                    };
                }
                return meal;
            });

            case MealActionTypes.CLEAR_MEALS:
                let array = state.slice();
                array.length = 0;
                return array;

            default:
                return state;
    }
}