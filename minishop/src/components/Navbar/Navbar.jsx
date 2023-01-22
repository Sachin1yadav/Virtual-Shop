import React, { useEffect, useState } from "react";
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
  Image,
  Divider
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import {FaUserCircle} from "react-icons/fa";
import {BsFillHeartFill,BsFacebook} from  "react-icons/bs";
import {BiLogIn} from  "react-icons/bi";
import {FcGoogle} from  "react-icons/fc";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../redux/AddUser/User.actions";
export default function Navbar({ display = "flex" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const { isauth, userData } = useSelector((val) => val.authUser);
  const dispatch = useDispatch()
  useEffect(() => {
  if(isauth){
    dispatch(addNewUser(userData))
  }
}, [])
  const getHomeData = async () => {
    try {
      const res = await fetch(
        "https://lackadaisical-volcano-larch.glitch.me/data"
      );
      const HomeData = await res.json();
      setData(HomeData);
    } catch (error) {
      console.log("e", error);
    }
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };
  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result);
  };
  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item, item.id);
   nav(`/data/${item.id}`);
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
        bg={'#232f3e'} color={'white'} position="fixed" zIndex={10} left={"0"} right='0' top='0'
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
          <DrawerBody lineHeight={'38px'} alignItems="start" >
          <Box   display={{md:"none",lg:"none",sm:"block",base:"block"}} onClick={()=>nav(`/`)} >
        Home
       </Box>
          <Box display={'flex'}  >
        T-Shirts
       </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} >
        Jackets
       </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} >
         Bags
      </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} >
          Watch
      </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box color="white" >-</Box>
          <Box display={'flex'} justifyContent='space-between'>
          Cart <HiOutlineShoppingCart fontSize={"27"} color={'#0C090A'}/>
      </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} justifyContent='space-between'>
          Wishlist <BsFillHeartFill fontSize={"27"} color={'red'}/>
       </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
       <Box color="white" >-</Box>
       <Box  display={'flex'} justifyContent='space-between'  >
            Login <BiLogIn fontSize={"27"} color={'#0C090A'} />
       </Box>
 <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} justifyContent='space-between'>
            Sign Up <FaUserCircle fontSize={"27"} color={'#123456'}/>
       </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
       <Box color="white">-</Box>
       <Box display={'flex'} justifyContent='space-between'>
          App Store <FcGoogle fontSize={"27"} color={'#0C090A'}/>
       </Box>
       <Divider orientation='horizontal' colorScheme={"blackAlpha"}    />
          <Box display={'flex'} justifyContent='space-between'>
          Facebook Page <BsFacebook fontSize={"27"} color={'#123456'}/>
       </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
     <Box w='130px' onClick={()=>nav(`/`)} >
    {/* <Heading size='lg'display={{sm:"none",md:"block",lg:"block",base:"none"}} onClick={()=>nav `/`} >i</Heading> */}
    <Image src="https://user-images.githubusercontent.com/80110392/213902764-824a5310-8367-466f-8057-6e53bec9e1ed.png" alt='logo' w='100%'  />
    </Box>
    <Spacer />
{/*--------------------------------   Categories   ----------------------------------------------*/}
     <Box >
      <Menu isLazy>
     <MenuButton> <Heading size='sm' display={{md:"none",lg:"block",base:"none"}}>CATEGORIES </Heading></MenuButton>
     <MenuList color={'black'} mt={'15px'} w='730px' h='340px' padding={'20px'} >
     {/* MenuItems are not rendered unless Menu is open */}
     <SimpleGrid minChildWidth='135px' spacing='40px' mt={'15px'} textAlign={'start'}
     fontWeight='bold' m='auto' >
     <Box
         onClick={()=>nav(`/data/14`)}
           color={'black'}
           > <Image  src='https://m.media-amazon.com/images/I/61rdavN+vvL._UL1440_.jpg' alt='1' width={'40%'} mb='10px' />
       T-Shirts
       </Box>
     <Box
         onClick={()=>nav(`/data/30`)}
           color={'black'}
         > <Image  src='https://m.media-amazon.com/images/I/4126+gKFRaL.jpg' alt='2' width={'40%'} mb='10px'/> Jackets
       </Box>
     <Box
         onClick={()=>nav(`/data/55`)}
           color={'black'}
         >  <Image  src='https://m.media-amazon.com/images/I/81ArAQS-KkL._SY450_.jpg' alt='3' width={'50%'} mb='10px'/> Bags
       </Box>
     <Box
         onClick={()=>nav(`/data/73`)}
           color={'black'}
         > <Image  src='https://m.media-amazon.com/images/I/61Fn1C6+5YL._UL1500_.jpg' alt='4' width={'50%'} mb='10px'/> Watches
       </Box>
    <Box
         onClick={()=>nav(`/data/99`)}
           color={'black'}
         > <Image  src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX3X2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420156213' alt='5' mb='10px' width={'40%'}/>
       Headphones
       </Box>
     <Box
         onClick={()=>nav(`/data/98`)}
           color={'black'}
         > <Image  src='https://5.imimg.com/data5/SELLER/Default/2020/11/TF/TF/DU/99149733/boat-stone-1400-30-w-bluetooth-speaker-1000x1000.jpg' alt='6' mb='10px' width={'60%'}/>
         Boat Speakers
       </Box>
    <Box
         onClick={()=>nav(`/data/155`)}
           color={'black'}
        ><Image  src='https://m.media-amazon.com/images/I/61dU0vkPK8S._UL1500_.jpg' alt='7' mb='10px' width={'60%'}/> Shoes
       </Box>
        <Box
         onClick={()=>nav(`/data/129`)}
           color={'black'}
         ><Image  src='https://m.media-amazon.com/images/I/71p4EwOzccL._SX569_.jpg' alt='8' mb='10px' width={'60%'}/> Mobiles
          </Box>
     </SimpleGrid>
     </MenuList>
     </Menu>
     </Box>
     <Spacer />
 {/*--------------------------------   INPUT FIELD   ----------------------------------------------*/}
 <Box   boxSizing='borderBox' className='searchBox' width={{lg:"50%", md:"50%", sm:"100%",base:"100%"}}
 display={{sm:"block",md:"block",lg:"block",base:"block"}}
 ml={{lg:"0px", md:"0px", sm:"-25px",base:"-80px"}}
 >
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
              fontSize: "2.2vh",
              border:"none",
            }}
          />
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
                <MenuItem onClick={()=>nav(`/DLogin`)} >Login</MenuItem>
                <MenuItem onClick={()=>nav(`/sign`)} >SignIn</MenuItem>
                <MenuItem>Your Orders</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
     {/*--------------------------------   Cart Button  ----------------------------------------------*/}
       <Button
         w={'full'}
         display={{md:"none",lg:"block",base:"none"}}
         maxW={'sm'}
         onClick={()=>nav(`/cart`)}
         colorScheme={'white'}
         leftIcon={<HiOutlineShoppingCart fontSize={"27"} />}>
       </Button>
    </ButtonGroup>
    </Box>
   </Flex>
  )
}