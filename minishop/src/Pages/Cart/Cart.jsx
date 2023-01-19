import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '../../redux/Cart/Cart.actions';

const Cart = () => {
  const {loading , error, cartdata} = useSelector((store) => store.cart);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CartActions())
}, []);

console.log('cartdata:', cartdata)
if(loading) return <h3>Loading...</h3>;
if(error) return <h3>Error...</h3>;
return (
  <div>
      <div style={{}}>
          hii
      </div>
  </div>
)
}

export default Cart