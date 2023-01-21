import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Heading,
  Spacer,
  ButtonGroup,
  SimpleGrid,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
} from '@chakra-ui/react';
import {  HamburgerIcon} from '@chakra-ui/icons';  
import {FaUserCircle,FaShoppingBag, FaHeadphonesAlt,FaHeadphones} from "react-icons/fa";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {IoShirtOutline} from  "react-icons/io5"; 
import {GiMonclerJacket,GiSchoolBag} from  "react-icons/gi";  
import {BsWatch,BsSpeakerFill,BsFillHeartFill,BsFacebook} from  "react-icons/bs"; 
import {SiPuma,SiReebok, SiAdidas} from  "react-icons/si";
import {CgAppleWatch} from  "react-icons/cg";
import {BiLogIn} from  "react-icons/bi";
import {FcGoogle} from  "react-icons/fc"; 
 import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import "./Navbar.css";

export default function Navbar ({display='flex'}){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  

  const getHomeData =async () => {
   
    try {
        const res = await fetch("https://lackadaisical-volcano-larch.glitch.me/data");
        const HomeData = await res.json();
        setData(HomeData);  
        
    } catch (error) {
        console.log("e", error);
    }
}
  useEffect(() => {
    getHomeData()
  }, []);
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
   // console.log(item, item.id);
    window.location = `/data/${item.id}`;
  };
  const handleOnClear = () => {
    //console.log("Cleared");
  };

  const handleOnFocus = () => {
    //console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Brand: {item.brand}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };


  return (
    <Flex width='screen'
     alignItems='center'
      gap='2' 
        bg={'gray.800'} color={'white'} position="fixed" zIndex={1} left={"0"} right='0' top='0' 
        display={display}
        >
          
{/*-----------------------------------     Drawer  ----------------------------------*/}
<Box p='4'>
<Button  w={'full'}
         maxW={'sm'}
         onClick={onOpen}
         colorScheme={'white'}
         leftIcon={<HamburgerIcon fontSize={"27"} />}>
        
       </Button>
      </Box>
      <Spacer />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Product Categories</DrawerHeader>

          <DrawerBody lineHeight={'38px'} >

          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<IoShirtOutline fontSize={"27"}  color={'green'}/>}>T-Shirts
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<GiMonclerJacket fontSize={"27"}  color={"#00FF00"} />}>Jackets
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box> <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<GiSchoolBag fontSize={"27"} color={'#1F45FC'}/>}>Bags
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box> <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<BsWatch fontSize={"27"} color={"#64E986"} />}>Watch
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />

          <Box color="white" >-</Box>
          <Box color="white">-</Box>

          <Box   onClick={()=>window.location = `/DLogin`} ><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<BiLogIn fontSize={"27"} color={'#0C090A'}/>}>Login
       </Button></Box>

 <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box  onClick={()=>window.location = `/sign`} ><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<FaUserCircle fontSize={"27"} color={'#123456'}/>}>Sign Up
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<HiOutlineShoppingCart fontSize={"27"} color={'#0C090A'}/>}>Cart
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<BsFillHeartFill fontSize={"27"} color={'red'}/>}>Wishlist
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<FcGoogle fontSize={"27"} color={'#0C090A'}/>}>App Store
       </Button></Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box><Button
         w={'full'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'black'}  color={'black'}
         rightIcon={<BsFacebook fontSize={"27"} color={'blue'}/>}>Facebook Page
       </Button></Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
      
     <Box p='4'>
    <Heading size='lg'display={{sm:"none",md:"block",lg:"block",base:"none"}} onClick={()=>window.location = `/`} >industryBuying</Heading>
    </Box>
    <Spacer />
{/*--------------------------------   Categories   ----------------------------------------------*/}    
     <Box >
      <Menu isLazy>
     <MenuButton> <Heading size='sm' display={{md:"none",lg:"block",base:"none"}}>CATEGORIES </Heading></MenuButton>
     <MenuList color={'black'} mt={'15px'} w='680px' h='280px' >
     {/* MenuItems are not rendered unless Menu is open */}
     <SimpleGrid minChildWidth='120px' spacing='40px' mt={'35px'}>
     <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<IoShirtOutline fontSize={"27"}  color={'green'}/>}>T-Shirts
       </Button>
     <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<GiMonclerJacket fontSize={"27"}  color={"#00FF00"} />}>Jackets
       </Button>
     
     <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<GiSchoolBag fontSize={"27"} color={'#1F45FC'}/>}>Bags
       </Button>
     
     <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<BsWatch fontSize={"27"} color={"#64E986"} />}>Watch
       </Button>

    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<FaHeadphonesAlt fontSize={"27"} color={"#123456"} />}>Headphones
       </Button>
   
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<BsSpeakerFill fontSize={"27"} color={'red'}/>}>Boat Speakers
       </Button>
   
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<FaShoppingBag fontSize={"27"} color={'#804A00'}/>}>Office Bags
       </Button>
  
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<CgAppleWatch fontSize={"27"} color={"#8B8000"} />}>Fit Bands
       </Button>
    
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<SiPuma fontSize={"27"} color={'red'} />}>Puma
       </Button>
    
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<SiReebok fontSize={"27"} color={'blue'} />}>Reebok
       </Button>
    
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<SiAdidas fontSize={"27"} color={'#0C090A'}/>}>Adidas
       </Button>
   
    <Button
         w={'full'}
         onClick={()=>window.location = `/`}
         colorScheme={'black'}  color={'black'}
         leftIcon={<FaHeadphones fontSize={"27"} color={"#FD1C03"}/>}>JBl
       </Button>
     </SimpleGrid>
     </MenuList>
     </Menu>
     </Box>
     <Spacer />
 {/*--------------------------------   INPUT FIELD   ----------------------------------------------*/}
 <Box   boxSizing='borderBox' className='searchBox' width={{lg:"50%", md:"50%", sm:"90%",base:"100%"}}  
 display={{sm:"block",md:"block",lg:"block",base:"block"}} 
 >
          <Box   >
          <ReactSearchAutocomplete
            items={data}
            maxResults={8}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            placeholder="Search for product, brands and more"
            onClear={handleOnClear}
            fuseOptions={{ keys: ["name", "brand", "Categories"] }}
            formatResult={formatResult}
            styling={{
              zIndex: 100,
              borderRadius: "10px",
              boxShadow: "none",
              
              height: "32px",
              
              placeholderFontSize: "2.5vh",
              fontSize: "2.2vh"
            }}
          />
          </Box>
         
        </Box>
        <Spacer />
 {/*--------------------------------   Sign in and Cart buttons  ----------------------------------------------*/}       
    <Box  >
    <ButtonGroup gap='2'>
    {/*--------------------------------   Signin Button  ----------------------------------------------*/} 
     
       <Flex alignItems={'center'}  >
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Button
        w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<FaUserCircle fontSize={"27"} />}>
       </Button>
              </MenuButton>
              <MenuList color='black' >
                <MenuItem onClick={()=>window.location = `/DLogin`} >Login</MenuItem>
                <MenuItem onClick={()=>window.location = `/sign`} >SignIn</MenuItem>
                <MenuItem>Your Orders</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
 
     {/*--------------------------------   Cart Button  ----------------------------------------------*/} 
       <Button
         w={'full'}
         display={{md:"none",lg:"block",base:"none"}}
         maxW={'sm'}
         onClick={()=>window.location = `/cart`}
         colorScheme={'white'}
         leftIcon={<HiOutlineShoppingCart fontSize={"27"} />}>
       </Button>
     
    </ButtonGroup>
    </Box>
    
   </Flex>
  )
}

