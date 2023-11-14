import { ALLTUTORS_GET_SUCCESS, DETAILS_ADD_SUCCESS, DETAILS_FAILURE, DETAILS_GET_SUCCESS, DETAILS_REQUEST, TUTOR_DETAILS_ADD_SUCCESS, TUTOR_DETAILS_GET_SUCCESS } from "./actionTypes";

  
  let initialState = {
    isLoading: false,
    isError: false,
    isAdded:false,
    student: {},
    alltutors : [],
    tutor : {},
    isTutorAdded : false
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
     case DETAILS_REQUEST : {
        return {
            ...state,
            isLoading : true,
            isError : false,
            isAdded : false
        }
     }

     case DETAILS_FAILURE : {
        return {
            ...state,
            isLoading : false,
            isError : true,
            isAdded : false
        }
     }

     case DETAILS_ADD_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            isAdded : true
        }
     }

     case TUTOR_DETAILS_ADD_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            isAdded : false,
            isTutorAdded : true
        }
     }

     case DETAILS_GET_SUCCESS : {
        return {
            ...state,
            isLoading:false,
            isError:false,
            isAdded:false,
            student : payload
        }
     }

     case TUTOR_DETAILS_GET_SUCCESS : {
        return {
            ...state,
            isLoading:false,
            isError:false,
            isAdded:false,
            tutor : payload
        }
     }

     case ALLTUTORS_GET_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            isAdded: false,
            alltutors : payload
        }
     }

      default: {
        return state;
      }
    }
  };
  