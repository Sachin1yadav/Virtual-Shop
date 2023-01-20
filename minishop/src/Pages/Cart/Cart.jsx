import { Button, Heading, Input, InputGroup, InputRightElement, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, updateCarts } from '../../redux/Cart/Cart.actions';

import {FaShippingFast} from "react-icons/fa"

import {SlMinus ,SlPlus} from "react-icons/sl"

import {RiDeleteBinLine} from "react-icons/ri"
import { TbDiscount2 } from 'react-icons/tb';
import axios from 'axios';
import { updateCart } from '../../redux/Cart/Cart.api';

import CartComponent  from "./CartComponent"

const Cart = () => {
  const {loading , error, cartData} = useSelector((store) => store.cart);
  
  const dispatch = useDispatch();

  // const [Total,setTotal] = useState(0);
  let sum = 0
  cartData.forEach((el)=>{
      sum=  sum + el.qty*(+el.price+152)
  })

  const [detailIcon,setDetailIcon] = useState(true);

  const [apply,setApply] = useState("");

  const [alertMessage,setAlertMessage] = useState("")

  useEffect(() => {
      dispatch(cartActions())
  }, [dispatch]);

  console.log('cartData:', cartData)

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
    
  }

  const remove = () => {

  }

  const offerClick = (val) => {
    console.log("val",apply)
    if(apply === "VS300"){
      // alert("Applied")
    }
    else{
        // alert("promo not applicable")
    }
  }

  const quantityIncre = async(id,qty) => {
      dispatch(updateCarts(id,{"qty":qty+1})).then(()=> dispatch(cartActions()));
  }

  const quantityDecre = async(id,qty) => {
    // setQuantity(qty+1)
    dispatch(updateCarts(id,{"qty":qty-1})).then(()=> dispatch(cartActions()));
}
  if(loading) return <h3>Loading...</h3>;
  if(error) return <h3>Error...</h3>;
  return (
    <>
    <div  style={{display:'flex', flexDirection:'row', gap:'100px' ,justifyContent:'left'}}>
        <Heading color={'white'}>My Cart({cartData.length} Items)</Heading>
        <Heading color={'white'}>Total Cart Price :- Rs {sum}</Heading>
    </div>
    <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
        <div style={{color:'white',flex:'7'}}>
          
          <Table  size="lg">
            <Thead>
              <Tr >
                <Th color={'white'}>Item</Th>
                <Th color={'white'}>Quantity</Th>
                <Th color={'white'}>Price (Inclusive of GST)</Th>
              </Tr>
            </Thead>
            <Tbody>
                {
                  cartData.map((el) => (
                    <Tr>
                      <Td w={'400px'}>
                        <div>
                          <h1>{el.name}</h1><br/>
                          <div style={{display:'flex' ,flexDirection:'row', gap:'20px'}}>
                            <div>
                              <img style={{height:'80px',width:'80px'}} src={el?.image?.[0]} alt ={el.name}/>
                            </div>
                            <div>
                              <h3>Category:{el.Categories}</h3>
                              <h3>Brand:{el.brand}</h3>
                              <h3>Ratings:{el.rating}</h3>
                              <div>
                                <button style={{display:'flex' ,alignItems:'center',color:'skyblue' ,gap:'10px'}} onClick={()=>remove(el.id)}><RiDeleteBinLine/>Remove</button>
                              </div>
                            
                            </div>
                          </div>
                        </div>
                      </Td>
                      <Td>
                        <div style={{border:'1px solid grey',display:'flex', flexDirection:'row', gap:'10px', justifyContent:'', alignItems:'center', width:'90px'}} >
                          <button style={{background:'black',padding:'5px 10px'}} onClick={()=> quantityDecre(el.id,el.qty)} disabled={el.qty === 1}>-</button>
                          <h1>{el.qty}</h1>
                          <button style={{background:'black',padding:'5px 10px'}} onClick={()=> quantityIncre(el.id,el.qty)}>+</button>
                      </div>
                      </Td>
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

          {/* <div>
            {
              cartData.map((el)=> (
                <div key={el.id}  style={{border:'1px solid red', display:'flex',flexDirection:'row', gap:'10px', justifyContent:'', alignItems:'center'}}>
                  <div>
                    <img style={{height:'250px',width:'200px'}} src={el?.image?.[0]} alt ={el.name}/>
                  </div>
                  <div style={{border:'1px solid grey',display:'flex', flexDirection:'row', gap:'10px', justifyContent:'', alignItems:'center'}}>
                    <button style={{background:'black',padding:'5px 10px'}} onClick={()=> setQuantity(quantity-1)} disabled={quantity === 1}>-</button>
                    <h1>{quantity}</h1>
                    <button style={{background:'black',padding:'5px 10px'}} onClick={()=> setQuantity(quantity+1)}>+</button>
                  </div>
                </div>
              ))
            }
           </div> */}
        </div>
        <div style={{color:'white' ,flex:'3', display:'flex' , flexDirection:'column', gap:'20px'}}>
           
            <div style={{border:'1px solid white'}}>
              <div style={{display:'flex', flexDirection:'row',gap:'10px' ,alignItems:'center', justifyContent:'space-between', padding:'5px' , backgroundColor:'gray', fontSize:'20px'}}>
                <h1>Partner Offers</h1>
                <h1><TbDiscount2/></h1>
              </div>
              <div style={{padding:'20px'}}>
              <div style={{ border:'1px dashed red',padding:'10px', fontSize:'20px', textAlign:'left'}}>
                <h1>Get GST invoice and save up to 28% on Business Purchases.</h1>
                <a href="" style={{color:"skyblue"}}>View More</a>
              </div>
              </div>
            </div>


            <div style={{border:'1px solid white'}}>
              <div style={{display:'flex', flexDirection:'row',gap:'10px' ,alignItems:'center', justifyContent:'space-between', padding:'5px' , backgroundColor:'gray', fontSize:'20px'}}>
                <h1>Offers Available</h1>
                <h1><TbDiscount2/></h1>
              </div>
              <div style={{padding:'20px'}}>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      type='text'
                      placeholder='Enter Offer'
                      onChange={(e)=>setApply(e.target.value)} value={apply}
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' bg={'transparent'} size='sm' onClick={offerClick()}>
                        Apply
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <div style={{textAlign:'left', padding:'5px'}}>
                    <h1>Available Offer Codes </h1>
                    <p>VS300</p>
                    <p>VS500</p>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart