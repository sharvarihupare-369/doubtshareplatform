import axios from "axios";
import { ALLTUTORS_GET_SUCCESS, DETAILS_ADD_SUCCESS, DETAILS_FAILURE, DETAILS_GET_SUCCESS, DETAILS_REQUEST, TUTOR_DETAILS_ADD_SUCCESS } from "./actionTypes"
import { baseUrl } from "../../url";

export const addstudentDetails = (detailsObj,token) => (dispatch) => {
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


 export const getalltutors = (token) => (dispatch) => {
    dispatch({type:DETAILS_REQUEST});
    axios.get(`${baseUrl}/api/tutor/`,{
     headers : {
         'Authorization':`Bearer ${token}`
     }
    }).then((res)=>{
    //  console.log(res)
      dispatch({type:ALLTUTORS_GET_SUCCESS,payload:res.data})
    }).catch(err=>{
    //  console.log(err)
     dispatch({type:DETAILS_FAILURE})
    })
 }

 export const addTutorDetails = (payload,token) => (dispatch) => {
    dispatch({type:DETAILS_REQUEST});
    axios.post(`${baseUrl}/api/tutor/addData`,payload,{
     headers : {
         'Authorization':`Bearer ${token}`
     }
    }).then((res)=>{
     // console.log(res)
      dispatch({type:TUTOR_DETAILS_ADD_SUCCESS})
    }).catch(err=>{
     // console.log(err)
     dispatch({type:DETAILS_FAILURE})
    })
 }


 export const getTutorDetails = (token) => (dispatch) => {
    dispatch({type:DETAILS_REQUEST});
    axios.get(`${baseUrl}/api/tutor/gettutor`,{
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