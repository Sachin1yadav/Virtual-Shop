import {ADMIN_LOGIN_LOADING,ADMIN_LOGIN_FAIL,ADMIN_LOGIN_SUCCESS,ADMIN_LOGOUT} from "./admin.action.type";

let tokn = localStorage.getItem("token");
const initialState = {
  loading: false,
  error: false,
  token: tokn,
  isAuth: tokn ? true : false,
};

export const adminAuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_LOADING: {
      return {...state, loading:true};
    }
    case ADMIN_LOGIN_FAIL: {
      return {...state, loading:false, error:true};
    }
    case ADMIN_LOGIN_SUCCESS: {
        localStorage.setItem("token",payload)
      return {...state, loading:false, isAuth:true};
    }
    case ADMIN_LOGOUT:{
        localStorage.removeItem('token')
        return {...state, loading:false, isAuth:false}
    }
    default: {
      return state;
    }
  }
};
