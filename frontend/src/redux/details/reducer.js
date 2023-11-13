import { DETAILS_ADD_SUCCESS, DETAILS_FAILURE, DETAILS_GET_SUCCESS, DETAILS_REQUEST } from "./actionTypes";

  
  let initialState = {
    isLoading: false,
    isError: false,
    isAdded:false,
    student: {}
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

     case DETAILS_GET_SUCCESS : {
        return {
            ...state,
            isLoading:false,
            isError:false,
            isAdded:false,
            student : payload
        }
     }

      default: {
        return state;
      }
    }
  };
  