import React from "react";
import "./Demosimiler.scss";
import { BsStarFill } from "react-icons/bs";
import { Button, Text, useToast } from "@chakra-ui/react";
import axios from "axios";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const DemoSimiler = ({data}) => {

  const navigate  = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
 
  return (
    <div className="proMainDiv">

    <Slider {...settings} >
          {
                data?.map((el,index) => (
                <div key={index} className="prodiv">

                <img
                  src={el?.image?.[1]}
                  alt="name"
                />
                <p className="proName">{el.brand}</p>
                <div className="divPriceRating">
                  <p className="proPrice">
                    Price: <span>₹ {el.price}</span>
                  </p>
                  <div className="divStar">
                    <p className="proRating"> <BsStarFill/></p>
                    <span>{el.rating}</span></div>
                  
                </div>
                <button className="addtocart" onClick={()=>navigate(`/data/${el.id}`)}>
                    View Details
                </button>
                </div>
               
              ))}
    </Slider>
     
      

    </div>

  );
};

export default DemoSimiler;
