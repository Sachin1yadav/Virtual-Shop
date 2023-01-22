import {
    Button,
     
  } from "@chakra-ui/react";
  import React, { useEffect  } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    cartActions,
    deleteCartItem,
    updateCarts,
  } from "../redux/Cart/Cart.actions";
  import "./Orders.scss";
   
  import { AiFillDelete, AiOutlineHome } from "react-icons/ai";
  
  import { RiDeleteBinLine } from "react-icons/ri";
   
  import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
 
  const Order = () => {
    
     
    const {loading , cartData, } = useSelector((store) => store.cart);
  
     
    const dispatch = useDispatch();
     
    
    useEffect(() => {
      dispatch(cartActions())
      // if(cartData.length !== 0){
        // let sum = cartData.reduce((acc,el) =>
        // {
        //     let prc = (+el.price+152);
        //     acc += el.qty*prc;
        //     return acc
        // },0)
        // setTotalCartPrice(sum)
     
      // }
  }, [ cartData.length]);
  console.log('loading:', loading)
  
     
      
    return (
      <>
        <div className="CartMainDiv">
         
            <div className="firstDivOrder">
              <div className="CartDetailsOrder">
                <p>My Orders:[{cartData.length}]</p>
                <Link to="/" ><p style={{fontSize:"30px"}}><AiOutlineHome/></p></Link>
                
              </div>
              {cartData.map((e, id) => (
                <div className="cartProDivOrder" key={id}>
                  <div className="CartImgDeatilsOrder">
                    <div className="CartImgDivOrder">
                      <img src={e?.image[0]} alt={e.price} />
                    </div>
                    <div className="ProDivDetailOrder">
                      <p className="ProdivnameOrder">
                        {e.name.length < 25
                          ? e.name
                          : `${e.name.slice(0, 25)}...`}{" "}
                      </p>
                      <p className="ProdivpriceOrder">Price: ₹{e.price}</p>
                       
                    </div>
                  </div>
                  <div className="deliveryDivOrder">
                    <h5  > <TbTruckDelivery/> </h5>
                    <p>Delivery by 29 jan</p>
                  </div>
                  <div className="QRdiv">
                    
                    <div>
                      <Button
                       onClick={()=>{
                        dispatch(deleteCartItem(e.id)).then(()=> dispatch(cartActions()));
                        // dispatch(cartActions());
                        }}
                        type="button"
                        variant="light"
                        marginTop="-7px"
                        className="delBTN"
                        colorScheme='red'
                        color="red"
                      >
                        {/* <AiFillDelete fontSize="20px" /> */}
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             
           
        </div>
      </>
    );
  };
  
  export default Order;