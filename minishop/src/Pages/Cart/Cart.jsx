import { Button, Heading, Input, InputGroup, InputRightElement, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, deleteCartItem, updateCarts } from '../../redux/Cart/Cart.actions';

import {FaShippingFast} from "react-icons/fa"

import {SlMinus ,SlPlus} from "react-icons/sl"

import {RiDeleteBinLine} from "react-icons/ri"
import { TbDiscount2 } from 'react-icons/tb';

const Cart = () => {
  const {loading , error, cartData,totalPrice} = useSelector((store) => store.cart);
  console.log('totalPriceSelector:', totalPrice)
  console.log('cartData:', cartData)
  
  const dispatch = useDispatch();
  
  const [totalCartPrice,setTotalCartPrice] = useState(totalPrice);

  const updatePrice = () => {
    setTotalCartPrice(
      cartData.reduce(
        (acc, el) => acc + (+el.price+152) * el.qty,
        0
      )
    );
  }
 
  console.log('totalCartPrice:', totalCartPrice)
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
      updatePrice()
    // }

}, [ cartData.length,totalPrice]);
console.log('loading:', loading)

console.log('After UseEffect totalSum:', totalCartPrice)

  //------Cart Total Price Function-------------------------------------------------------------------- //


  const [detailIcon,setDetailIcon] = useState(true);
  
  
   //------Offer Function-------------------------------------------------------------------- //
  
  

   const [apply,setApply] = useState("");

 
   const offerClick = () => {
     console.log('val:', totalCartPrice)
     console.log("Apply text",apply);
 
     if(apply === "VS300"){
      //  let dis = (30 / 100);
      // //  console.log("dis",dis)
      //  let totalValue = Math.floor(totalCartPrice - (totalCartPrice * dis))
      //  console.log('VS300:', totalValue);
       setTotalCartPrice(cartData.reduce(
        (acc, el) => acc + (+el.price+152) * el.qty *70/100,
        0
      ));
       setApply("")
     }else if(apply === "VS500"){
      let dis = (50 / 100);
      //  console.log("dis",dis)
       let totalValue = Math.floor(totalCartPrice - (totalCartPrice * dis))
       console.log('VS500:', totalValue);
       setTotalCartPrice(totalValue);
       setApply("")
     }
 
   }

   //------Price Details hide Function-------------------------------------------------------------------- //
  const detailsHide = (id) => {
    
      cartData.map((ele) => {
        const targetDiv = document.getElementById("details");
        if(ele.id === id){
          if (targetDiv.style.display !== "none"){
            targetDiv.style.display = "none";
            setDetailIcon(false);
          }else{
            targetDiv.style.display = "block";
            setDetailIcon(true)
          }
        }
      })
    // )
    
  } //detail hoide div




  //------Cart Remove Function-------------------------------------------------------------------- //
  // const remove = (id) => {
  //     dispatch(deleteCartItem(id));
  //     dispatch(cartActions());
  // }

 
  //------Quantity Increase Function-------------------------------------------------------------------- //
  const quantityIncre = async(id,qty) => {
      dispatch(updateCarts(id,{"qty":qty+1}))
      .then(()=> {
        dispatch(cartActions());
      });
  }

   //------Quantity Decrease Function----------------------------------------------------------------------- //

  const quantityDecre = async(id,qty) => {
    dispatch(updateCarts(id,{"qty":qty-1})).then(()=> {
      dispatch(cartActions());
    });
    
  }

  // Loading And Error
  // if(loading) return <h3>Loading...</h3>; 
  // if(error) return <h3>Error...</h3>;
  
  return (
    <>
    {/* <Navbar/> */}
    {/* Cart two div with flex */}
    <div style={{display:'flex', flexDirection:'row', gap:'20px' }}>
        
        {/* Cart Left div with cart items, total price and table */}
         
        <div style={{flex:'7',display:'flex' ,flexDirection:'column' ,gap:'10px'}}>
          {/* Items and total price */}
          <div  style={{display:'flex', flexDirection:'row', gap:'10px' ,justifyContent:'space-between'}}>
              <Heading fontSize={'25px'}>My Cart({cartData.length} Items)</Heading>
              <Heading fontSize={'25px'}>Total Cart Price :- Rs {totalCartPrice}</Heading>
          </div>
          {/* table */}

          <Table style={{borderCollapse:"separate", borderSpacing:"0 1em"}} size="lg">
            <Thead>
              <Tr >
                <Th>Item</Th>
                <Th>Quantity</Th>
                <Th>Price (Inclusive of GST)</Th>
              </Tr>
            </Thead>
            <Tbody>
                {
                  cartData.map((el) => (
                   
                    <Tr key={el.id}>
                      {/* name, image , details */}
                      <Td w={'400px'}>
                        <div>
                          <h1 style={{
                            fontSize:'20px',color:'black'
                          }}>{el.name}</h1><br/>
                          <div style={{display:'flex' ,flexDirection:'row', gap:'20px'}}>
                            <div>
                              <img style={{height:'80px',width:'80px'}} src={el?.image?.[0]} alt ={el.name}/>
                            </div>
                            <div>
                              <h3>Category:{el.Categories}</h3>
                              <h3>Brand:{el.brand}</h3>
                              <h3>Ratings:{el.rating}</h3>
                              <div>
                                <button style={{display:'flex' ,alignItems:'center',color:'#232f3e',fontWeight:'bold' ,gap:'10px'}} onClick={()=>{
                                    dispatch(deleteCartItem(el.id)).then(()=> dispatch(cartActions()));
                                    // dispatch(cartActions());
                                    }}><span style={{
                                  color:'#232f3e',fontWeight:'bold'
                                }}><RiDeleteBinLine/></span>Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Td>
                       {/* Quantity */}
                      <Td>
                        <div style={{border:'1px solid grey',display:'flex', flexDirection:'row', gap:'10px', justifyContent:'', alignItems:'center'}} >
                          <button style={{background:'black',color:'white', padding:'5px 15px' , fontSize:'20px'}} onClick={()=> quantityDecre(el.id,el.qty)} disabled={el.qty === 1}>-</button>
                          <h1 style={{fontSize:'20px'}}>  { loading ? <Spinner/> : el.qty}</h1>
                          <button style={{background:'black', color:'white', padding:'5px 15px' , fontSize:'20px'}} onClick={()=> quantityIncre(el.id,el.qty)}>+</button>
                      </div>
                      </Td>

                      {/* Price details */}
                      <Td w={'450px'}>
                        <div>
                           <div style={{display:'flex' ,alignItems:'center' ,gap:'10px'}} >
                           <h1>Rs. {el.qty *(+el.price + 152)}</h1><br/>
                           <div><button style={{display:'flex' ,alignItems:'center' ,gap:'10px'}} onClick={()=>detailsHide(el.id)}>Details{detailIcon ? <SlMinus/> : <SlPlus/>}</button></div>
                           </div>
                         
                            <div id='details' style={{display:'flex' ,flexDirection:'row', gap:'20px'}}>
                              <div style={{width:"250px"}}>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                  <h3>Price:</h3>
                                  <h3>Rs. {el.qty *(+el.price)}</h3>
                                </div>

                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                  <h3>Tax:</h3>
                                  <h3>Rs. 152</h3>
                                </div>

                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                  <h3>Final Price:</h3>
                                  <h3>Rs. {el.qty *(+el.price + 152)}</h3>
                                </div>
                              </div>
                            </div>
                            <div style={{color:'green',display:'flex' ,alignItems:'center' ,gap:'10px'}}> <FaShippingFast/>Free shipping</div>
                        </div>
                        {/* <CartComponent cartData={cartData} price={+el.price} qty={el.qty} id={el.id}/> */}

                      </Td>
                    </Tr>                    
                  ))
                }
            </Tbody>
  
          </Table>
        </div>

        {/* Cart Right div having offer div */}
        <div style={{flex:'4', display:'flex' , flexDirection:'column', gap:'30px'}}>
           
            <div style={{border:'1px solid black'}}>
              <div style={{display:'flex', flexDirection:'row',gap:'10px' ,alignItems:'center', justifyContent:'space-between', padding:'5px' , backgroundColor:'gray', fontSize:'25px',fontWeight:'bold'}}>
                <h1>Partner Offers</h1>
                <h1><TbDiscount2/></h1>
              </div>
              <div style={{padding:'20px'}}>
              <div style={{ border:'1px dashed red',padding:'10px', fontSize:'20px' ,borderRadius:'10px', textAlign:'left'}}>
                <h1>Get GST invoice and save up to 28% on Business Purchases.</h1>
                <a href="" style={{color:"#232f3e",fontWeight:'bold'}}>View More</a>
              </div>
              </div>
            </div>


            <div style={{border:'1px solid black'}}>
              <div style={{display:'flex', flexDirection:'row',gap:'10px' ,alignItems:'center', justifyContent:'space-between', padding:'5px' , backgroundColor:'gray', fontSize:'25px' ,fontWeight:'bold'}}>
                <h1>Offers Available</h1>
                <h1><TbDiscount2/></h1>
              </div>
              <div style={{padding:'20px'}}>
                  <InputGroup size='md' border={'1px solid black'} borderRadius='10px'>
                    <Input
                      pr='4.5rem'
                      type='text'
                      color={'black'}
                      placeholder='Enter Offer'
                      value={apply}
                      onChange={(e)=>setApply(e.target.value)} 
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' bg={'transparent'} size='sm' onClick={offerClick}>
                        Apply
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {/* <input type="text" placeholder='Enter coupon' value={apply} onChange={(e)=>setApply(e.target.value)}/>
                  <button onClick={offerClick(Sum)}>Apply</button> */}
                  <div style={{ padding:'10px', fontSize:'20px' ,borderRadius:'10px', textAlign:'left'}}>
                    <h1>Available Offer Codes (You can Apply only one Offer)</h1>
                    <p>VS300</p>
                    <p>OR</p>
                    <p>VS500</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default Cart;