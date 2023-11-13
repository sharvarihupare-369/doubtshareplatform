import axios from "axios";
import { DETAILS_ADD_SUCCESS, DETAILS_FAILURE, DETAILS_GET_SUCCESS, DETAILS_REQUEST } from "./actionTypes"
import { baseUrl } from "../../url";

export const studentDetails = (detailsObj,token) => (dispatch) => {
   dispatch({type:DETAILS_REQUEST});
   axios.post(`${baseUrl}/api/student/create`,detailsObj,{
    headers : {
        'Authorization':`Bearer ${token}`
    }
   }).then((res)=>{
    // console.log(res)
     dispatch({type:DETAILS_ADD_SUCCESS})
   }).catch(err=>{
    // console.log(err)
    dispatch({type:DETAILS_FAILURE})
   })
}

export const getStudentDetail = (token) => (dispatch) => {
    dispatch({type:DETAILS_REQUEST});
    axios.get(`${baseUrl}/api/student/`,{
     headers : {
         'Authorization':`Bearer ${token}`
     }
    }).then((res)=>{
    //  console.log(res)
      dispatch({type:DETAILS_GET_SUCCESS,payload:res.data})
    }).catch(err=>{
    //  console.log(err)
     dispatch({type:DETAILS_FAILURE})
    })
 }

