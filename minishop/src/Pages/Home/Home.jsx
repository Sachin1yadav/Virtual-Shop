import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
function Home() {
  const [data, setData] = useState([]);

  const getHomeData = async () => {
    try {
        const res = await fetch("https://b-tmart-api-5tjm.vercel.app/data");
        const HomeData = await res.json();
      setData(HomeData);
        setData(HomeData);  
      setData(HomeData);
        setData(HomeData);  
      setData(HomeData);
        setData(HomeData);  
      setData(HomeData);
        setData(HomeData);  
      setData(HomeData);
        setData(HomeData);  
      setData(HomeData);
    } catch (error) {
      console.log("e", error);
    }
}
  useEffect(() => {
    getHomeData();
  }, []);

  //console.log("data", data);

  return (
    <Box w="90%" m={"auto"}>
      {/* <PauseOnHover/> */}
        <Box >
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>shoes</Heading>
          <HomeProducts
          data={data.filter((item) => item.Categories === "t_shirt")}
        />
      </Box>

      <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Electronics</Heading>
          <HomeProducts
          data={data.filter((item) => item.Catogeries === "Electronics")}
        />
      </Box>

      <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Sports</Heading>
          <HomeProducts
          data={data.filter((item) => item.catogeries === "Sports")}
        />
      </Box>

      <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Mobile</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "phone")}/>
           </Box>
       
        <Box>
          <Heading>Fashion</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "fashion")}/>
        </Box>

      <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Beauty and Cosmetics</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "Beauty and Cosmetics" )}/>
        </Box>
    </Box>
  );
}

export default Home;

//-------------------------------------   Home Products Cards  ------------------------------------//

function HomeProducts(data) {
  return (
    <div className="container">
        {data.data.map((el, i) => {
          return (
            <div key={el.id} className="cord">
        <div className="imgBox">
          <img  src={el.image[0]}  alt="" />
        </div>
        <div className="details">
          <div className="nameHeart">
          <h3>
                  {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}
          {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
                  {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}
          {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
                  {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}
          {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}   
                  {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`}
                </h3>
                <p>
                  <BsFillHeartFill className="heart" />
                </p>
              </div>
              <h5>Price:{el.price}</h5>
              <h5>Rating:{el.rating}</h5>
              {/* <p> <BsFillHeartFill className="heart" /></p> */}
              {/* <p>
            Lorem ipsum dolor sit, orrupti ip consequatur voluptatum facilis
            animi commodi dolor sed cupiditate quam corrupti quisquam vero,
            aliquid odio.
          </p>{" "} */}
              <div className="btn">
          <Link to={`/data/${el.id}`} >
                        <button className="viweBtn">View</button>
                    </Link>
          </div>
        </div>
      </div>
          )
          // (<Box  key={el.id}  height='350px' border='1px' >
          //     <Image src={el.image[0]}  alt={el.price} w='50%' margin={'auto'} />
          //     <h2> {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`} </h2>
          //       <Box >
          //         <Box ><Heading fontSize={'14px'} >Price:</Heading><span> {el.price}</span></Box>
          //         <Box ><Heading fontSize={'14px'}>Ratting:</Heading> <span>{el.rating}</span></Box>
          //         <Box >
          //           <Link to={`/data/${el.id}`} >
          //             <Text>View Details</Text>
          //           </Link>
        //         </Box>
          //         </Box>   
        //         </Box>
          //     </Box>
          // </Box>)
          })}
       </div>
   
  );
}
//-------------------------------------   Home Top - Carousel   ------------------------------------//


 const PauseOnHover = ()=> {
   
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }

