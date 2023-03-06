import { Box, Heading,Image} from "@chakra-ui/react";
import { useEffect ,useState} from "react";
 import React from "react";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import HomeProducts from "./HomeProducts";
import "./Home.css";
import { Carousel } from "./Carousel";
import { Loaderskeleton } from "./Carousel";
import Similer from "../Similer/Similer";
import HomeCarouselDemo from './HomeCarouselDemo';
import Navbar from "../../components/Navbar/Navbar";
import {Slider} from '../../components/Slider'
function Home() {
  const [Alldata, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getHomeData =async () => {
    setLoading(true);
    try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/data`);
        const HomeData = await res.json();
        setAllData(HomeData);
        setLoading(false);
    } catch (error) {
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
    <Box mt='65px' >
     <HomeCarouselDemo/>
    <Box w='100%' m={'auto'}  >
    {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"#232f3e",textAlign:"center" }}>Electronics</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "Headphones")}/>
        </Box>}
           {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"#232f3e",}}>Mobiles</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "mobile")}/>
        </Box>}
          <Image m={'auto'} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WSC-Desktop_dad0fc88-3fc8-4ed8-becb-b7901e4b37f4_1400x.jpg?v=1673853393"  alt='3'/>
        {loading ?  <Loaderskeleton/> : <Box>
          <Heading style={{color:"#232f3e",textAlign:"center" }}>Watch</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "watch")}/>
           </Box>}
        <Box mt='10px' mb='10px' >
          <Similer  data={Alldata.filter((item) => item.Categories === "shoes")} />
        </Box>
{/*---------------------    carousel   -------------------*/}
          <Box w={"100%"} m={"auto"} mt='15px' mb='10px' backgroundColor={'white'} >
            < Image src="https://thegenuineleather.com/wp-content/uploads/2022/10/MEN-LEATHER-JACKET.webp" m='auto' alt='1'/>
          </Box>
{/*-------------    carousel   --------------------*/}
{loading ?  <Loaderskeleton/> :    <Box>
          <Heading style={{color:"#232f3e",textAlign:"center" }}>Jacket</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "Jacket")}/>
        </Box>}
        <Box mt='15px' mb='10px' backgroundColor={'white'} w='98%' margin={'auto'} >
          <Carousel
          dots= {false} infinite= {true}
          slidesToShow = {4}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true }
          Img={Slider}
          />
          </Box>
        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"#232f3e",textAlign:"center" }}>Bags</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "bags")} />
        </Box>}
        <Box my='20'>
          <Similer  data={Alldata.filter((item) => item.Categories === "t_shirt")} />
        </Box>
          <Box w={"100%"} my='10'>
        <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1400x.jpg?v=1673538078" m={"auto"} alt='4'/>
          </Box>
          {loading ?  <Loaderskeleton/> : <Box >
          <Heading style={{color:"#232f3e",textAlign:"center" }}>T-Shirt</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "t_shirt")}/>
        </Box> }
        {loading ?  <Loaderskeleton/> :  <Box>
          <Heading style={{color:"#232f3e",textAlign:"center" }}>Shoes</Heading>
          <HomeProducts
            data={Alldata.filter((item) => item.Categories === "shoes")}/>
        </Box>}
    </Box>
    </Box>
   </>
  );
}
export default Home;
