import { Box, Heading } from "@chakra-ui/react";
import { useEffect ,useState} from "react";
 import React from "react";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import HomeProducts from "./HomeProducts";
import "./Home.css";
import { Carousel, SingleCarousel } from "./Carousel";
import { Loaderskeleton } from "./Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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
  }, []);

  //console.log("data", data);
  
  return (
    <Box>
    {loading ?  <Loaderskeleton/> :  <Navbar items={data} /> }
    <Box w='90%' m={'auto'}>
{/*---------------------------------    carousel   ---------------------------------------*/}
        <Carousel  
          dots= {true} infinite= {true}
          slidesToShow = {1}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={imagesTop}
          />
 {/*---------------------------------    carousel   ---------------------------------------*/}          
 {loading ?  <Loaderskeleton/> : <Box >
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>T-shirt</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "t_shirt")}/>  
        </Box> }
{/*---------------------------------    carousel   ---------------------------------------*/}        
         <Carousel  
          dots= {true} infinite= {true}
          slidesToShow = {3}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={slider2}
          />
          {/* <SingleCarousel  
          dots= {true} infinite= {true}
          slidesToShow = {3}
          slidesToScroll= {1}
          Speed= {500} 
          Img={data.filter((item) => item.Categories === "Jacket")}
          /> */}
{/*---------------------------------    carousel   ---------------------------------------*/}          
{loading ?  <Loaderskeleton/> :    <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Jacket</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Jacket")}/>
        </Box>}

        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Bags</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "bags")} />
        </Box>}

        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"red",textAlign:"start",textDecoration:"underLine"}}>Watch</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "watch")}/>
           </Box>}
       
           {loading ?  <Loaderskeleton/> :  <Box>
          <Heading>Headphones</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Headphones")}/>
        </Box>}
      
    </Box>
    <Footer/>
    </Box>
  );
}

export default Home;



const imagesTop = ['https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg'
]

const slider2 = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7VY_uPylvuiiTb4AsuCIALXIYGYUH4CfBg&usqp=CAU',
'https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681__340.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrgxY4EB0zTPGhJnsU_sJfLura-clv6pKvw&usqp=CAU',
'https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681__340.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrgxY4EB0zTPGhJnsU_sJfLura-clv6pKvw&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7VY_uPylvuiiTb4AsuCIALXIYGYUH4CfBg&usqp=CAU'

];



