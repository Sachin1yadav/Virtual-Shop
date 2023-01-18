import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect ,useState} from "react";
 import { Link } from "react-router-dom";
 import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [data, setData] = useState([]);

  const getHomeData =async () => {
    try {
        const res = await fetch("https://b-tmart-api-5tjm.vercel.app/data");
        const HomeData = await res.json();
        setData(HomeData);  
    } catch (error) {
        console.log("e", error);
    }
}
  useEffect(() => {
    getHomeData()
  }, []);

  //console.log("data", data);
  
  return (
    <Box w='90%' m={'auto'}>
       {/* <PauseOnHover/> */}
        <Box >
          <Heading >shoes</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "shoes")}/>  
        </Box>

        <Box>
          <Heading>Electronics</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "Electronics")}/>
        </Box>

        <Box>
          <Heading>Sports</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "Sports")} />
        </Box>

        <Box>
          <Heading>Mobile</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "phone")}/>
           </Box>
       
        <Box>
          <Heading>Fashion</Heading>
          <HomeProducts
            data={data.filter((item) => item.catogeries === "fashion")}/>
        </Box>

        <Box>
          <Heading>Beauty and Cosmetics</Heading>
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
      <SimpleGrid minChildWidth='300px' spacing='60px' >
        {data.data.map((el, i) => {
          return (<Box  key={el.id}  height='350px' border='1px' >
              <Image src={el.image[0]}  alt={el.price} w='50%' margin={'auto'} />
              <h2> {el.name.length < 8 ? el.name : `${el.name.slice(0, 8)}`} </h2>
                <Box >
                  <Box ><Heading fontSize={'14px'} >Price:</Heading><span> {el.price}</span></Box>
                  <Box ><Heading fontSize={'14px'}>Ratting:</Heading> <span>{el.rating}</span></Box>
                  <Box >
                    <Link to={`/${el.id}`} >
                      <Text>View Details</Text>
                    </Link>
                  </Box>   
              </Box>
          </Box>)
          })}
      </SimpleGrid>
   
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

