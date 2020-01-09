import * as MealActionTypes from '../actiontypes/meal';
import axios from 'axios';


export const addMeal = (name, price) => async dispatch => {

    await axios.post('/api/meals', {
        name: name,
        price: price
    },
    {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
    }
    );

    dispatch({ type: MealActionTypes.ADD_MEAL, name, price });

};

export const removeMeal = (id, index) => async dispatch => {

    await axios.delete('/api/meals/' + id, 
    {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
    }

    );
    

    dispatch({ type: MealActionTypes.REMOVE_MEAL, index});

};

export const updateMeal = (id, index, name, price) => async dispatch => {

    await axios.put('/api/meals/' + id, {
        name: name,
        price: price
    },
    {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
    }

    );

    dispatch({ type: MealActionTypes.UPDATE_MEAL, index, name, price });

};

export const getMeals = () => async dispatch => {

    const res = await axios.get('/api/meals', {
        headers: {
            ritadelToken: localStorage.getItem('ritadeltoken')
        }
        });
    
    dispatch({ type: MealActionTypes.GET_MEALS, payload: res.data});

};
   


export const clearMeals = () => {
    return {
        type: MealActionTypes.CLEAR_MEALS
    };
};