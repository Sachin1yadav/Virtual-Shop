import { Button, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { AiFillDelete, AiOutlineHome } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder, orderActions } from '../../redux/Order/Order.actions';

import {FcShipped} from "react-icons/fc"
import { getOrderAPI } from '../../redux/Order/Order.api';
import { Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb';

import "./Order.scss"
import Navbar from '../../components/Navbar/Navbar';

const Order = () => {

    const {loading , error, orderData} = useSelector((store) => store.order);
    console.log('orderData:', orderData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderActions())
       
    }, [ orderData.length]);

    let today = new Date()
    let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
    // console.log('date:', date)

    return (
      <>
       <Navbar />
        <div className="CartMainDiv" mt='80px'>
        <div className="firstDivOrder">
          <div className="CartDetailsOrder">
            <p>My Orders:[{orderData.length}]</p>
            <Link to="/">
              <p style={{ fontSize: "30px" }}>
                <AiOutlineHome />
              </p>
            </Link>
          </div>
          {orderData.map((e, id) => (
            <div className="cartProDivOrder" key={id}>
              <div className="CartImgDeatilsOrder">
                <div className="CartImgDivOrder">
                  <img src={e?.image[0]} alt={e.price} />
                </div>
                <div className="ProDivDetailOrder">
                  <p className="ProdivnameOrder">
                    {e.name.length < 25 ? e.name : `${e.name.slice(0, 25)}...`}{" "}
                  </p>
                  <p className="ProdivpriceOrder">Price: ₹{e.price}</p>
                </div>
              </div>
              <div className="deliveryDivOrder">
                <h5>
                  {" "}
                  <TbTruckDelivery />{" "}
                </h5>
                <p>Delivery by {date}</p>
              </div>
              <div className="QRdiv">
                <div>
                  <Button
                    onClick={() => {
                        dispatch(cancelOrder(e.id)).then(()=> dispatch(orderActions()));
                    }}
                    type="button"
                    variant="light"
                    marginTop="-7px"
                    className="delBTN"
                    colorScheme="red"
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
}

export default Order