import axios from "axios"
import { DOUBT_FAILURE, DOUBT_GET_SUCCESS, DOUBT_REQUEST } from "./actionTypes"
import { baseUrl } from "../../url";


export const addDoubt = (doubt,token) =>  (dispatch) => {
    dispatch({type:DOUBT_REQUEST})
    axios.post(`${baseUrl}/api/doubts/addDoubt`,doubt,{
        headers : {
            'Authorization':`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res)
        //  dispatch({type:DETAILS_ADD_SUCCESS})
    }).catch(err=>{
        console.log(err)
        // dispatch({type:DETAILS_FAILURE})
    })
}


export const getAllDoubts = (token) =>  (dispatch) => {
    dispatch({type:DOUBT_REQUEST})
    axios.get(`${baseUrl}/api/doubts/history`,{
        headers : {
            'Authorization':`Bearer ${token}`
        }
    }).then((res)=>{
         console.log(res)
         dispatch({type:DOUBT_GET_SUCCESS,payload:res.data})
    }).catch(err=>{
        console.log(err)
        dispatch({type:DOUBT_FAILURE})
    })
}