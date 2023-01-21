import { Box, Heading, Image } from "@chakra-ui/react";
import { useEffect ,useState} from "react";
 import React from "react";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import HomeProducts from "./HomeProducts";
import "./Home.css";
import { Carousel } from "./Carousel";
import { Loaderskeleton } from "./Carousel";




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
      
      <Box w={"98%"} m={"auto"} mt='74px' >
        <Image src="https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg"  alt='1'/>
      {/* <Carousel  
          dots= {false} infinite= {true}
          slidesToShow = {1}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={imagesTop}
          /> */}
          </Box>
         
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
          <Heading style={{color:"black",textAlign:"start" }}>T-Shirt</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "t_shirt")}/>  
        </Box> }
{/*---------------------------------    carousel   ---------------------------------------*/}        
<Box w={"98%"} m={"auto"} mt='74px' mb='50px'>
      <Carousel  
          dots= {false} infinite= {true}
          slidesToShow = {3}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true } 
          Img={slider2}
          />
          </Box>
          {/* <SingleCarousel  
          dots= {true} infinite= {true}
          slidesToShow = {3}
          slidesToScroll= {1}
          Speed= {500} 
          Img={data.filter((item) => item.Categories === "Jacket")}
          /> */}
{/*---------------------------------    carousel   ---------------------------------------*/}          
{loading ?  <Loaderskeleton/> :    <Box>
          <Heading style={{color:"black",textAlign:"start" }}>Jacket</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Jacket")}/>
        </Box>}

        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"black",textAlign:"start" }}>Bags</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "bags")} />
        </Box>}

        {loading ?  <Loaderskeleton/> :     <Box>
          <Heading style={{color:"black",textAlign:"start" }}>Watch</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "watch")}/>
           </Box>}
       
           {loading ?  <Loaderskeleton/> :  <Box>
          <Heading>Headphones</Heading>
          <HomeProducts
            data={data.filter((item) => item.Categories === "Headphones")}/>
        </Box>}
      
    </Box>
    
    </Box>
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

const slider2 = ['https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_f60dcd57-3f35-4f38-a32f-3f9666996225_1400x.jpg?v=1673538078',
'https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681__340.jpg',
'https://s3.thingpic.com/images/WZ/1ChLD86XEtKdLmpiQHdW1nhF.jpeg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7VY_uPylvuiiTb4AsuCIALXIYGYUH4CfBg&usqp=CAU'

];



