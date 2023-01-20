import {ADMIN_LOGIN_LOADING,ADMIN_LOGIN_FAIL,ADMIN_LOGIN_SUCCESS,ADMIN_LOGOUT} from './admin.action.type';
import { getAdmin } from './admin.api';

export const getAdminAuth = (data)=> async(dispatch)=>{
    try{
        dispatch({type:ADMIN_LOGIN_LOADING});
        let res =  await getAdmin(data)
        typeof(res)==='string'?dispatch({type:ADMIN_LOGIN_SUCCESS,payload:res}):
        dispatch({type:ADMIN_LOGIN_FAIL})
    }catch(err){
        dispatch({type:ADMIN_LOGIN_FAIL})
    }
}

export const adminLogout = ()=>async(dispatch)=>{
    dispatch({type:ADMIN_LOGOUT})
}