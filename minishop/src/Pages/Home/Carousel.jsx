import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeProducts from "./HomeProducts";

export  const Carousel = ({dots,
    infinite,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    pauseOnHover,Img})=> {
    
    var settings = {
        dots:dots,
        infinite:infinite,
        slidesToShow:slidesToShow,
        slidesToScroll:slidesToScroll,
        autoplay:autoplay,
        autoplaySpeed:autoplaySpeed,
        pauseOnHover:pauseOnHover
      };
    
    return (
      <div color="green">
        <Slider {...settings}>
         {Img && Img.map((el,i)=>(
        <div key={i} width='100%' >
        <img src={el} alt={i} />
        </div>
         ))}
          
        </Slider>
      </div>
    );
  }

//--------------------------------------------  SingleCarousel  ------------------------------------------//

  export  const SingleCarousel = ({dots,
    infinite,
    slidesToShow,
    slidesToScroll,
    Speed,Img})=> {
    
    var settings = {
        dots:dots,
        infinite:infinite, Speed:Speed,
        slidesToShow:slidesToShow,
        slidesToScroll:slidesToScroll,
      };
    
    return (
      <div   >
        <Slider {...settings}>
        <HomeProducts  data={Img} />
        </Slider>
      </div>
    );
  }


  export const Loaderskeleton = ()=>{
    return (
        <SimpleGrid minChildWidth='200px' spacing='40px' color={'blue'} >
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
            <Skeleton height='230px' />
        </SimpleGrid>
        
    )
  }