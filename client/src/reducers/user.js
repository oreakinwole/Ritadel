import * as UserActionTypes from '../actiontypes/user';

const initialState = {
    loginSucces: false,
    loginError: false,
    userTokenValid: null
};

export default function user(state = initialState, action) {

    switch(action.type) {
        case UserActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                loginSucces: true
            };

        case UserActionTypes.LOGIN_ERROR:
            return{
                ...state,
                loginSucces: false,
                loginError: true
            };

        case UserActionTypes.USER_TOKEN_VALID:
            return{
                ...state,
                userTokenValid: true
            };
            
        case UserActionTypes.USER_TOKEN_INVALID:
            return{
                ...state,
                userTokenValid: false
            };

        default:
            return state;
    }
}