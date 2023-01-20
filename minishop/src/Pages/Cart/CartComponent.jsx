import React, { useState,useRef } from 'react'
import {SlMinus ,SlPlus} from "react-icons/sl"
import {FaShippingFast} from "react-icons/fa"

const CartComponent = ({price,qty,id,cartData}) => {
    const [detailIcon,setDetailIcon] = useState(true);

    const detailsHide = () => {
        const targetDiv = document.getElementById("details");

        // cartData.map((ele) => {
         
        //   if(id === ele.id){
        //     if (targetDiv.style.display !== "none"){
        //         targetDiv.style.display = "none";
        //       setDetailIcon(false);
        //     }else{
        //         targetDiv.style.display = "block";
        //       setDetailIcon(true)
        //     }
        //   }
        // })


        // const targetDiv = document.getElementById("cartdetails");
        if (targetDiv.style.display !== "none"){
            targetDiv.style.display = "none";
            setDetailIcon(false);
        }else{
            targetDiv.style.display = "block";
            setDetailIcon(true)
        }
        
}

  return (
    <div>
        <div>
            <div style={{display:'flex' ,alignItems:'center' ,gap:'10px'}} >
            <h1>Rs. {qty *(price + 152)}</h1><br/>
            <div><button style={{display:'flex' ,alignItems:'center' ,gap:'10px'}} onClick={()=>detailsHide()}>Details{detailIcon ? <SlMinus/> : <SlPlus/>}</button></div>
            </div>
            <div id='cartDetails'>
            <div  style={{ display:'flex' ,flexDirection:'row', gap:'20px'}}>
                <div style={{width:"250px"}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <h3>Price:</h3>
                    <h3>Rs. {qty *(price)}</h3>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <h3>Tax:</h3>
                    <h3>Rs. 152</h3>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <h3>Final Price:</h3>
                    <h3>Rs. {qty *(price + 152)}</h3>
                </div>
                </div>
            </div>
            </div>
            <div style={{color:'green',display:'flex' ,alignItems:'center' ,gap:'10px'}}> <FaShippingFast/>Free shipping</div>
        </div>
    </div>
  )
}

export default CartComponent;