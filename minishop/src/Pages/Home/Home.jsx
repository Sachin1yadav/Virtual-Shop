import { Box, Heading, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { useEffect ,useState} from "react";
 import React from "react";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import HomeProducts from "./HomeProducts";
import "./Home.css";
import { Carousel } from "./Carousel";
import { Loaderskeleton } from "./Carousel";

import DemoSimiler from "../../DemoPagesBySachin/DemoSimiler";

// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import Slider from "react-slick";



import HomeCarouselDemo from './HomeCarouselDemo';
import Navbar from "../../components/Navbar/Navbar";


function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getHomeData =async () => {
    setLoading(true);
    try {
        const res = await fetch("https://lackadaisical-volcano-larch.glitch.me/data");
        const HomeData = await res.json();
        setData(HomeData);  
        setLoading(false);
    } catch (error) {
        console.log("e", error);
        setLoading(false);
    }
}
  useEffect(() => {
    getHomeData()
    document.title = 'Virtual Shop'

  }, []);

 
  

  
  return (
    <>
     <Navbar/>
    <Box mt='80px' >
      

      {/* <Box w={"98%"} m={"auto"} mt='74px' >

        <Image src="https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg"  alt='1'/>
     <Carousel  
          dots= {false} infinite= {true}
          slidesToShow = {1}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={imagesTop}
          />
          </Box> */}
          
     {/* Carousal by kiran */}
     <HomeCarouselDemo/> 
         
         
    <Box w='90%' m={'auto'}  >
{/*---------------------------------    carousel   ---------------------------------------*/}
        {/* <Carousel  
          dots= {true} infinite= {true}
          slidesToShow = {1}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={imagesTop}
          /> */}
 {/*---------------------------------    carousel   ---------------------------------------*/}          
 {loading ?  <Loaderskeleton/> : <Box >
          <Heading style={{color:"black",textAlign:"center" }}>T-Shirt</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "t_shirt")}/>  
        </Box> }

        {/* <Box mt='80px' mb='60px' >
          <DemoSimiler  data={data.filter((item) => item.Categories === "shoes")} />
        </Box> */}
{/*---------------------------------    carousel   ---------------------------------------*/}        
          <Box w={"100%"} m={"auto"} mt='74px' mb='50px' backgroundColor={'white'} >
            < Image src="https://thegenuineleather.com/wp-content/uploads/2022/10/MEN-LEATHER-JACKET.webp" m='auto' alt='1'/>
     
          </Box>
          
         
{/*---------------------------------    carousel   ---------------------------------------*/}          
{loading ?  <Loaderskeleton/> :    <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Jacket</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Jacket")}/>
        </Box>}

        <Box mt='40px' mb='40px' backgroundColor={'white'} >
          <Carousel  
          dots= {false} infinite= {true}
          slidesToShow = {4}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={slider2}
          />
          </Box>

        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Bags</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "bags")} />
        </Box>}

        {/* <Box mt='80px' mb='60px' >
          <DemoSimiler  data={data.filter((item) => item.Categories === "t_shirt")} />
        </Box> */}

        <Box w={"100%"} m={"auto"} mt='74px' mb='50px' border='2px' >
        <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WSC-Desktop_dad0fc88-3fc8-4ed8-becb-b7901e4b37f4_1400x.jpg?v=1673853393"  alt='3'/>
       </Box>
       {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Watch</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "watch")}/>
           </Box>}

          <Box w={"100%"} m={"auto"} mt='74px' mb='50px' border='2px' >
        <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1400x.jpg?v=1673538078"  alt='4'/>
          </Box>
           {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Headphones</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Headphones")}/>
        </Box>}

        {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Mobiles</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "mobile")}/>
        </Box>}

        {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"black",textAlign:"center" }}>Shoes</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "shoes")}/>
        </Box>}
      
    </Box>
    
    </Box>
   </>
  );
}

export default Home;



const imagesTop = ['https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1400x.jpg?v=1673538078',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WSC-Desktop_dad0fc88-3fc8-4ed8-becb-b7901e4b37f4_1400x.jpg?v=1673853393',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg'
]

const slider2 = ['https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB1000_445x.jpg?v=1671007984',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB1000_445x.jpg?v=1671007984',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB1000_445x.jpg?v=1671007984',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960',


];


