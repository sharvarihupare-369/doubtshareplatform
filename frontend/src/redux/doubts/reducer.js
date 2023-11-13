import { DOUBT_ADD_SUCCESS, DOUBT_FAILURE, DOUBT_GET_SUCCESS, DOUBT_REQUEST } from "./actionTypes";

  let initialState = {
    isLoading: false,
    isError: false,
    isDoubtAdded:false,
    alldoubts: []
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
     case DOUBT_REQUEST : {
        return {
            ...state,
            isLoading : true,
            isError : false,
            isDoubtAdded : false
        }
     }

     case DOUBT_FAILURE : {
        return {
            ...state,
            isLoading : false,
            isError : true,
            isDoubtAdded : false
        }
     }

     case DOUBT_ADD_SUCCESS : {
        return {
            ...state,
            isLoading : false,
            isError : false,
            isDoubtAdded : true
        }
     }

     case DOUBT_GET_SUCCESS : {
        return {
            ...state,
            isLoading:false,
            isError:false,
            isDoubtAdded:false,
            alldoubts : payload
        }
     }

      default: {
        return state;
      }
    }
  };
  