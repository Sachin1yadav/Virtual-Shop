import {
    CART_GET_LOADING,
    CART_GET_SUCCESS,
    CART_GET_ERROR,
    CART_UPDATE_DATA,
    CART_REMOVE,
    TOTAL_PRICE
} from "./Cart.actionTypes"

let initialState = {
    loading:false,
    error:false,
    cartData:[],
    totalPrice:0,
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
            const changePrice = (str) => {
                let res = str.replace(/\D/g, "");
                return parseInt(res);
            };
            let sum = payload.reduce(
                (acc, el) => {
                    return acc + changePrice(el.price) * el.qty
                },
                0
            )
            return {
                ...state,
                loading:false,
                cartData:payload,
                totalPrice: sum
            }
        }

        case CART_UPDATE_DATA:{

            const qtyValue = state.cartData.map((cart) =>{
                if( cart.id === payload.id){
                    cart.qty = payload.qty
                }
                return cart;
            })

            return {
                ...state,
                cartData: qtyValue
            }  
        }

        case CART_REMOVE:{
            return {
                ...state,
                cartData:state.cartData.filter((cart)=> cart.id !== payload.id)
            }
        }

        case TOTAL_PRICE : {
            return {
                ...state,
                totalPrice:payload
            }
        }

        default : {
            return state;
        }
    }
}