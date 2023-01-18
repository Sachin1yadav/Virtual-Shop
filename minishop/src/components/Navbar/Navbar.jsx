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
  Center,
  Text,
  Heading,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';  
import {FaUserCircle} from "react-icons/fa";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {SlLocationPin} from "react-icons/sl";

export default function Navbar (){
  return (
    <Flex minWidth='max-content'
     alignItems='center'
      gap='2' 
        bg={'gray.800'} color={'white'}
        >
     <Box p='4'>
    <Heading size='lg'>industryBuying</Heading>
    </Box>
    <Spacer />
{/*--------------------------------   Categories   ----------------------------------------------*/}    
     <Box >
      <Menu isLazy>
     <MenuButton> <Heading size='sm'>CATEGORIES </Heading></MenuButton>
     <MenuList color={'black'} mt={'15px'} >
     {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Abrasive</MenuItem>
    <MenuItem>Appliances</MenuItem>
    <MenuItem>Bearings</MenuItem>
    <MenuItem>Cleaning</MenuItem>
    <MenuItem>Electrical</MenuItem>
    <MenuItem>Electronic & Robotics</MenuItem>
    <MenuItem>Fastners</MenuItem>
    <MenuItem>Hand Tools</MenuItem>
    <MenuItem>Hardware</MenuItem>
    <MenuItem>Hydraulics</MenuItem>
    <MenuItem>LED & Light</MenuItem>
    <MenuItem>Machinery</MenuItem>
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
         </InputGroup>
        </Box>
        <Spacer />
 {/*--------------------------------   Sign in and Cart buttons  ----------------------------------------------*/}       
    <Box >
    <ButtonGroup gap='2'>
    {/*--------------------------------   Signin Button  ----------------------------------------------*/} 
     
       <Button
        w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<FaUserCircle fontSize={"27"} />}>
         <Center>
           <Text>Sign In</Text>
         </Center>
       </Button>
 {/*--------------------------------   Trck order Button  ----------------------------------------------*/}    
       <Button
         w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<SlLocationPin fontSize={"27"} />}>
         <Center>
           <Text>Track Order</Text>
         </Center>
       </Button>
     
     {/*--------------------------------   Cart Button  ----------------------------------------------*/} 
     
       <Button
         w={'full'}
         maxW={'sm'}
         colorScheme={'white'}
         leftIcon={<HiOutlineShoppingCart fontSize={"27"} />}>
         <Center>
           <Text>CART</Text>
         </Center>
       </Button>
     
    </ButtonGroup>
    </Box>
   </Flex>
  )
}

