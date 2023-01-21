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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/Auth/auth.actions";
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
    <Flex
      width="screen"
      alignItems="center"
      gap="2"
      bg={"gray.800"}
      color={"white"}
      position="fixed"
      zIndex={1}
      left={"0"}
      right="0"
      top="0"
      display={display}
    >
      {/*-----------------------------------     Drawer  ----------------------------------*/}
      <Box p="4">
        <Button
          w={"full"}
          maxW={"sm"}
          onClick={onOpen}
          colorScheme={"white"}
          leftIcon={<HamburgerIcon fontSize={"27"} />}
        ></Button>
      </Box>
      <Spacer />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Product Categories
          </DrawerHeader>

          <DrawerBody lineHeight={"38px"}>
            <Box>T-Shirts</Box>
            <Box>Jackets</Box>
            <Box>Bags</Box>
            <Box>Watch</Box>
            <Box color="white">-</Box>
            <Box color="white">-</Box>
            <Box onClick={() => (window.location = `/DLogin`)}>Login</Box>
            <Box onClick={() => (window.location = `/sign`)}>Sign Up</Box>
            <Box>Cart</Box>
            <Box>Wishlist</Box>
            <Box>Google App</Box>
            <Box>Facebook Page</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box p="4">
        <Heading
          size="lg"
          display={{ md: "none", lg: "block", base: "none" }}
          onClick={() => nav(`/`)}
        >
          industryBuying
        </Heading>
      </Box>
      <Spacer />
      {/*--------------------------------   Categories   ----------------------------------------------*/}
      <Box>
        <Menu isLazy>
          <MenuButton>
            {" "}
            <Heading
              size="sm"
              display={{ md: "none", lg: "block", base: "none" }}
            >
              CATEGORIES{" "}
            </Heading>
          </MenuButton>
          <MenuList color={"black"} mt={"15px"} w="600px" h="300px">
            {/* MenuItems are not rendered unless Menu is open */}
            <SimpleGrid minChildWidth="100px" spacing="40px">
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
      <Box
        p="4"
        boxSizing="borderBox"
        className="searchBox"
        width={{ lg: "50%", md: "50%", sm: "80%", base: "80%" }}
      >
        <Box>
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
            }}
          />
        </Box>
      </Box>
      <Spacer />
      {/*--------------------------------   Sign in and Cart buttons  ----------------------------------------------*/}
      <Box>
        <ButtonGroup gap="2">
          {/*--------------------------------   Signin Button  ----------------------------------------------*/}

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                { isauth?<Image src={userData.profile} w='14' rounded='full' /> :<Button
                  w={"full"}
                  maxW={"sm"}
                  colorScheme={"white"}
                  leftIcon={<FaUserCircle size="27" />}
                ></Button>}
              </MenuButton>
              <MenuList color="black">
                <MenuItem>Profile</MenuItem>
                {isauth ? (
                  <>
                  <MenuItem>Wishlist</MenuItem>
                  <MenuItem onClick={()=>dispatch(userLogout())} >Log Out</MenuItem>
                  </>
                ) : (
                  <>
                  <MenuItem onClick={() => nav(`/DLogin`)}>Login</MenuItem>
                  <MenuItem >Register</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>

          {/*--------------------------------   Cart Button  ----------------------------------------------*/}
          <Button
            w={"full"}
            maxW={"sm"}
            onClick={() => nav(`/cart`)}
            colorScheme={"white"}
            leftIcon={<HiOutlineShoppingCart fontSize={"27"} />}
          ></Button>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}
