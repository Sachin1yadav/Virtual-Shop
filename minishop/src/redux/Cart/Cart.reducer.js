import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR,
    CART_UPDATE_DATA
} from "./Cart.actionTypes"

let initialState = {
    loading:false,
    error:false,
    cartData:[]
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
                cartData:payload,
            }
        }

        case CART_UPDATE_DATA:{

            const updateValue = state.cartData.map((cart) =>{
                if( cart.id === payload.id){
                    cart.qty = payload.qty
                }
                return cart;
            })

            return {
                ...state,
                cartData: updateValue
            }  
        }

        default : {
            return state;
        }
    }
}