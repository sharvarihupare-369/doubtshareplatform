import axios from "axios";
import {
  AUTH_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_SUCCESS,
  AUTH_REQUEST,
} from "./actionTypes";
import { baseUrl } from "../../url";

export const signup = (payload) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  axios
    .post(`${baseUrl}/api/auth/register`, payload)
    .then((res) => {
      // console.log(res)
      dispatch({ type: AUTH_REGISTER_SUCCESS, payload: res.data.message });
    })
    .catch((err) => {
    //   console.log(err)
      dispatch({ type: AUTH_FAILURE , payload:err.response.data.message });
    });
};

export const login = (payload) => (dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    axios
      .post(`${baseUrl}/api/auth/login`, payload)
      .then((res) => {
        // console.log(res)
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        // console.log(err)
        dispatch({ type: AUTH_FAILURE,payload:err.response.data });
      });
};

export const logout = (token) => (dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    axios.get(`${baseUrl}/api/auth/logout`,{
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        dispatch({type:AUTH_LOGOUT_SUCCESS})
    }).catch((err)=>{
        console.log(err)
        dispatch({type:AUTH_FAILURE})
    })
};
