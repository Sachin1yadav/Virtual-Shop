import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement, 
  Input,
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
} from '@chakra-ui/react';
import { SearchIcon , HamburgerIcon} from '@chakra-ui/icons';  
import {FaUserCircle} from "react-icons/fa";
import {HiOutlineShoppingCart} from "react-icons/hi";
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function Navbar ({items}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const handleOnSearch = (string, results) => {
  //   console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //   console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //   // window.location = `/products/${item.id}`;
  // };

  // const handleOnFocus = () => {
  //   console.log("Focused");
  // };

  // const handleOnClear = () => {
  //   console.log("Cleared");
  // };


  return (
    <Flex minWidth='max-content'
     alignItems='center'
      gap='2' 
        bg={'gray.800'} color={'white'}
        >
{/*-----------------------------------     Drawer  ----------------------------------*/}
 <Button colorScheme='blue' onClick={onOpen}>
 <IconButton
            size={'md'}
            icon= {<HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
          />
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
          <Box>Abrasive</Box>
    <Box>Appliances</Box>
    <Box>Bearings</Box>
    <Box>Cleaning</Box>
    <Box>Electrical</Box>
    <Box>Electronic & Robotics</Box>
    <Box>Fastners</Box>
    <Box>Hand Tools</Box>
    <Box>Hardware</Box>
    <Box>Hydraulics</Box>
    <Box>LED & Light</Box>
    <Box>Machinery</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Spacer />
     <Box p='4'>
    <Heading size='lg'>industryBuying</Heading>
    </Box>
    <Spacer />
{/*--------------------------------   Categories   ----------------------------------------------*/}    
     <Box >
      <Menu isLazy>
     <MenuButton> <Heading size='sm'>CATEGORIES </Heading></MenuButton>
     <MenuList color={'black'} mt={'15px'} w='600px' h='300px' >
     {/* MenuItems are not rendered unless Menu is open */}
     <SimpleGrid minChildWidth='100px' spacing='40px' >
     <Box>Abrasive</Box>
    <Box>Appliances</Box>
    <Box>Bearings</Box>
    <Box>Cleaning</Box>
    <Box>Electrical</Box>
    <Box>Electronic & Robotics</Box>
    <Box>Fastners</Box>
    <Box>Hand Tools</Box>
    <Box>Hardware</Box>
    <Box>Hydraulics</Box>
    <Box>LED & Light</Box>
    <Box>Machinery</Box>
     </SimpleGrid>
     </MenuList>
     </Menu>
     </Box>
     <Spacer />
 {/*--------------------------------   INPUT FIELD   ----------------------------------------------*/}
 <Box p='4'>
          <InputGroup>
         <InputLeftElement
           children={<IconButton
            colorScheme='orange'
            aria-label='Search database'
            icon={<SearchIcon />}
          />}
            />
        <Input type='search' placeholder='Search' 
        size={"md"}  color={'black'} 
        variant='outline' w={500} bg={'white'} />
        {/* <ReactSearchAutocomplete
            items={items}
            maxResults={15}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            fuseOptions={{ keys: ["name", "brand","Categories"] }}
            placeholder="Search for product, brands and more"
            styling={{
              zIndex: 100,
              borderRadius: "5px",
              boxShadow: "none",
              border: "1px solid #e5e5e5",
              height: "5vh",
              placeholderFontSize: "2.5vh",
              fontSize: "2.2vh",
            }}
            
          /> */}
         </InputGroup>
        </Box>
        <Spacer />
 {/*--------------------------------   Sign in and Cart buttons  ----------------------------------------------*/}       
    <Box >
    <ButtonGroup gap='2'>
    {/*--------------------------------   Signin Button  ----------------------------------------------*/} 
     
       <Flex alignItems={'center'}>
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
         {/* <Center>
           <Text>Sign In</Text>
         </Center> */}
       </Button>
              </MenuButton>
              <MenuList color='black' >
                <MenuItem>Login</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <MenuItem>Your Orders</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
 {/*--------------------------------   Trck order Button  ----------------------------------------------*/}    
       {/* <Button
         w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<SlLocationPin fontSize={"27"} />}>
         <Center>
           <Text>Track Order</Text>
         </Center>
       </Button> */}
     
     {/*--------------------------------   Cart Button  ----------------------------------------------*/} 
     
       <Button
         w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<HiOutlineShoppingCart fontSize={"27"} />}>
         {/* <Center>
           <Text>CART</Text>
         </Center> */}
       </Button>
     
    </ButtonGroup>
    </Box>
   </Flex>
  )
}

