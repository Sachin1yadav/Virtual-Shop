import { Box, ButtonGroup, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function NavScrollExample() {
  return (
    <Navbar bg='dark' color='light' expand="lg"  variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              w={500}
              border='1px solid red'
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;