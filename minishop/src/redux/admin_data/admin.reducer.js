import {GET_PROD_LOADING,
  GET_PROD_SUCCESS,
  GET_ALL_PROD_SUCCESS,
  GET_PROD_FAIL,
  ADD_PROD_LOADING,
  ADD_PROD_ERROR,
  ADD_PROD_SUCCESS,GET_USER_LOADING,
  GET_USER_ERROR,
  GET_USER_SUCCESS} from './admin.actoins.type'

const initState = {
  loading: false,
  error: false,
  products: [],
  allProd:[],
  allUsers:[]
};

export const adminAllData = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROD_LOADING: {
      return { ...state,loading:true };
    }
    case GET_PROD_SUCCESS: {
      return { ...state,loading:false, products:payload };
    }
    case GET_PROD_FAIL: {
      return { ...state,error:true };
    }
    case ADD_PROD_LOADING: {
      return { ...state };
    }
    case ADD_PROD_ERROR: {
      return { ...state };
    }
    case ADD_PROD_SUCCESS: {
      return { ...state };
    }
    case GET_ALL_PROD_SUCCESS:{
      return {...state, allProd:payload }
    }
    case GET_USER_LOADING:{
      return {...state, loading:true }
    }
    case GET_USER_ERROR:{
      return {...state, error:true }
    }
    case GET_USER_SUCCESS:{
      return {...state, allUsers:payload }
    }
    default: {
      return { ...state };
    }
  }
};
