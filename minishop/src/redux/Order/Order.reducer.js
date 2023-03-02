import {
    ORDER_GET_LOADING,
    ORDER_GET_SUCCESS,
    ORDER_GET_ERROR,
    ORDER_REMOVE
} from "./Order.actionTypes"
let initialState = {
    loading:false,
    error:false,
    orderData:[]
}
export const orderReducer = (state = initialState ,{type,payload})=>{
    switch(type){
        case  ORDER_GET_LOADING:{
            return {
                ...state,
                loading:true
            }
        }
        case  ORDER_GET_ERROR:{
            return {
                ...state,
                loading:false,
                error:true,
            }
        }

        case  ORDER_GET_SUCCESS:{
            return {
                ...state,
                loading:false,
                orderData:payload,
            }
        }

        case ORDER_REMOVE:{
            return {
                ...state,
                orderData:state.orderData.filter((order)=> order.id !== payload.id)
            }
        }
        default : {
            return state;
        }
    }
}