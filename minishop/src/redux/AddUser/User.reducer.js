import {
  USER_ADD_FAIL,
  USER_ADD_SUCCESS,
  USER_GET_SUCCESS,
  USER_GET_LOADING,
  USER_GET_FAILED,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  USER_UPDATE_LOADING
} from "./User.actionTypes";

const initialState = {
    loading:false,
    error:false,
  islogin: false,
  user:{}
};
export const userAddreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_ADD_SUCCESS: {
      return { ...state, islogin: true };
    }
    case USER_ADD_FAIL: {
      return { ...state, islogin: false };
    }
    case USER_GET_LOADING: {
      return { ...state,loading:true };
    }
    case USER_GET_SUCCESS:{
        return {...state, loading:false }
    }
    case USER_GET_FAILED: {
      return { ...state,loading:false, error:true };
    }
    case USER_UPDATE_LOADING: {
      return { ...state,loading:true };
    }
    case USER_UPDATE_SUCCESS: {
      return { ...state,user:payload,loading:false };
    }
    case USER_UPDATE_FAILED: {
      return { ...state,loading:false,error:true };
    }
    default: {
      return state;
    }
  }
};
