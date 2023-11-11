import { AUTH_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS, AUTH_REGISTER_SUCCESS, AUTH_REQUEST } from "./actionTypes";

let initialState = {
    isLoading : false,
    isError : false,
    isAuth : false,
    token : "",
    isRegistered : false,
    isLogin : false,
    isLogout : false
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        
        case AUTH_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAuth : false,
                isRegistered : false,
                isLogin : false,
                isLogout : false
            }
        }

        case AUTH_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAuth : false
            }
        }

        case AUTH_REGISTER_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isRegistered : true
            }
        }

        case AUTH_LOGIN_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isLogin : true,
                token : payload,
                isAuth : true
            }
        }

        case AUTH_LOGOUT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isLogout : true
            }
        }

        default : {
            return state;
        }
    }
}