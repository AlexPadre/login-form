import { Login } from './loginService';
import { Logout } from './logoutService';
import { ErrorUser } from './errorService';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ERROR_USER = "ERROR_USER";

export const loginAction = () => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: Login
    });
}

export const logoutAction = () => (dispatch) => {
    dispatch({
        type: LOGOUT_USER,
        payload: Logout
    });
}

export const errorAction = () => (dispatch) => {
    dispatch({
        type: ERROR_USER,
        payload: ErrorUser
    });
}