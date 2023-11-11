import {
  AUTH_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  AUTH_REQUEST,
} from "./actionTypes";

let initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
  isRegistered: false,
  isLogout: false,
  registermsg: "",
  loggedinname : "",
  errmsg : ""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
        isRegistered: false,
        isLogout: false,
      };
    }

    case AUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errmsg : payload
      };
    }

    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegistered: true,
        registermsg: payload,
      };
    }

    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload.token,
        loggedinname : payload.name,
        isAuth: true,
      };
    }

    case AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogout: true,
      };
    }

    default: {
      return state;
    }
  }
};
