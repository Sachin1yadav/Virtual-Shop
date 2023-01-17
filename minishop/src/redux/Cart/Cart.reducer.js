import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR
} from "./Cart.actionTypes"

let initialState = {
    loading:false,
    error:false,
    cartdata:[]
}

export const cartReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  CART_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  CART_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  CART_GET_SUCCESS:{
            return {
                ...state,
                loading:false,
                cartdata:payload,
            }
        }

        default : {
            return state;
        }
    }
}