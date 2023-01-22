import {USER_ADD_FAIL, USER_ADD_SUCCESS} from './User.actionTypes'

const initialState = {
    islogin:false
}
export const userAddreducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case USER_ADD_SUCCESS:{
            return{...state,islogin:true}
        }
        case USER_ADD_FAIL:{
            return{...state, islogin:false}
        }
    
        default:
           {return state}
    }
}