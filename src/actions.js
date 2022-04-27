import { Login } from './loginService';
import { ErrorUser } from './errorService';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ERROR_USER = "ERROR_USER";

export const loginAction = (name, email, password) => (dispatch) => {
    const identity = Login(name, email, password);
    console.log(identity);
    if (identity) {
        dispatch({
            type: LOGIN_USER,
            payload: identity
        });
    } else {
        dispatch({
            type: ERROR_USER,
            payload: ErrorUser()
        });
    }
}

export const logoutAction = () => (dispatch) => {
    dispatch({
        type: LOGOUT_USER
    });
}