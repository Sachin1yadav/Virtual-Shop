import {
  LOGIN_SUCCESS,
LOGIN_FAIL,
SIGNUP_SUCCESS,
SIGNUP_FAIL,
RESET_USER_DATA,
USER_UPDATE_LOADING,
USER_UPDATE_SUCCESS,
USER_UPDATE_FAILED
} from './auth.action.types'

let userDetails = JSON.parse(localStorage.getItem("userData"))
const initialState = {
  loading:false,
  error:false,
  status:false,
  userData:userDetails,
  isauth:userDetails?true:false
}
export const  authReducerfunc = (state=initialState,{type,payload})=>{
  switch (type) {
      case LOGIN_SUCCESS:{
          localStorage.setItem("userData",JSON.stringify(payload))
          return {...state,status:true, isauth:true,userData:payload,loading:false,error:false}
      }
      case LOGIN_FAIL:{
          return {...state, status:false}
      }
      case SIGNUP_SUCCESS:{
        localStorage.setItem("userData",JSON.stringify(payload))
          return {...state}
      }
      case SIGNUP_FAIL:{
          return {...state}
      }
      case USER_UPDATE_LOADING:{
          return {...state,loading:true}
      }
      case USER_UPDATE_SUCCESS:{
        localStorage.setItem("userData",JSON.stringify(payload))
          return {...state,loading:false,error:false}
      }
      case USER_UPDATE_FAILED:{
          return {...state}
      }
      case RESET_USER_DATA:{
          localStorage.removeItem("userData")
          return {...state, isauth:false,stauts:false}
      }
      default:{
          return {...state}
      }
  }
}