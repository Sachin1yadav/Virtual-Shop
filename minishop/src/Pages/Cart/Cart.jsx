import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, updateCarts } from "../../redux/Cart/Cart.actions";

import { FaShippingFast } from "react-icons/fa";

import { SlMinus, SlPlus } from "react-icons/sl";

import { RiDeleteBinLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import axios from "axios";
import { updateCart } from "../../redux/Cart/Cart.api";

import CartComponent from "./CartComponent";
import "./Cart.scss";
const Cart = () => {
  const { loading, error, cartData } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  // const [Total,setTotal] = useState(0);
  let sum = 0;
  cartData.forEach((el) => {
    sum = sum + el.qty * (+el.price + 152);
  });

  const [detailIcon, setDetailIcon] = useState(true);

  const [apply, setApply] = useState("");

  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    dispatch(cartActions());
  }, [dispatch]);

  console.log("cartData:", cartData);

  const detailsHide = (id) => {
    cartData.map((ele) => {
      const targetDiv = document.getElementById("details");
      if (ele.id === id) {
        if (targetDiv.style.display !== "none") {
          targetDiv.style.display = "none";
          setDetailIcon(false);
        } else {
          targetDiv.style.display = "block";
          setDetailIcon(true);
        }
      }
    });
    // )
  };

  const remove = () => {};

  const offerClick = (val) => {
    console.log("val", apply);
    if (apply === "VS300") {
      // alert("Applied")
    } else {
      // alert("promo not applicable")
    }
  };

  const quantityIncre = async (id, qty) => {
    dispatch(updateCarts(id, { qty: qty + 1 })).then(() =>
      dispatch(cartActions())
    );
  };

  const quantityDecre = async (id, qty) => {
    // setQuantity(qty+1)
    dispatch(updateCarts(id, { qty: qty - 1 })).then(() =>
      dispatch(cartActions())
    );
  };
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  return (
    <>
      <div className="CartMainDiv"> 
      <div className="BothDiv">
       <div className="firstDiv">
        <div className="CartDetails">
          <p>My Cart:[{cartData.length}]</p>
        </div>
        {cartData.map((e,id)=>(
          <div className="cartProDiv" key={id}>
              <div className="CartImgDiv">
                <img src={e?.image[0]} alt={e.price} />
              </div>
              <div className="ProDivDetail">
                <p className="Prodivname">{e.name}</p>
                <p className="Prodivprice">Price: {e.price}</p>
                <p className="Prodivrating">Rating: {e.raitng?(e.raitng):("4.3")}</p>
              </div>
              <div className="QRdiv">
                <div className="Qdiv">
        <button>-</button>
        <button>1</button>
        <button>+</button>
                </div>
                <div>
                  <p>delet</p>
                </div>
              </div>
              
          </div>
          
        ))}
       </div>
        
       <div className="secondDiv"></div>
       </div>
      </div>
    </>
  );
};

export default Cart;
