import { createStore } from 'redux';
import * as actions from './actions';

const initialState = {
    name: "",
    email: "",
    password: "",
    error: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_USER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case actions.LOGOUT_USER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case actions.ERROR_USER:
            return {
                ...state,
                error: action.payload.error
            }
    }
}

export default createStore(rootReducer);