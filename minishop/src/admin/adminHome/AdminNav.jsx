import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Select,
} from "@chakra-ui/react";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, AddIcon } from "@chakra-ui/icons";
import {useDispatch, } from 'react-redux'
import { adminLogout } from "../../redux/admin_auth/admin.actions";
import AdModal from "../AddProduct/Modal";
export default function AdminNav({handleCategory,catagory}) {
  const navigate = useNavigate()

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()

  // Log-out functionality 

  const handleSignout = ()=>{
    dispatch(adminLogout())
  } 
  // showUsers functionality
  const showUsers = ()=>{
    navigate("/admin/users")
  }

  // showSellers Functionality 
  const showSellers=()=>{
    navigate("/admin/sellers")
  }

  // Addproduct funcationality 
  const showModal = useRef(null)
  const addProd = ()=>{
  showModal.current.click()
  }


  return (
    <>
      <Box fontWeight={'semibold'} position={"fixed"} left='0' right={'0'} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="16" cursor={"pointer"} rounded="2xl" onClick={()=>navigate('/admin')} border='1px' overflow="hidden">
              <Image src="https://user-images.githubusercontent.com/80110392/213411141-41dba86a-52b0-44f4-9b7a-79ccbd7e1885.png" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link>
              <Select onChange={handleCategory} placeholder="Select Catagory">
                  {catagory.map((el,id)=><option key={id} value={el}>{el}</option>)}
                  {/* <option value="Jacket">Jacket</option>
                  <option value="watch">watch</option>
                  <option value="mobile">mobile</option>
                  <option value="Headphones">Headphones</option>
                  <option value="bags">bags</option>
                  <option value="shoes">shoes</option> */}
              </Select>
              </Link>
              <Link onClick={showUsers} >
                Users
              </Link>
              <Link onClick={showSellers}>
                Sellers
              </Link>
              <Link onClick={addProd} >Product
              <AddIcon mx='4' fontSize={'sm'} /> 
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <Button mx="4" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleSignout} >Log-Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
                <Link>Users</Link>
                <Link>Sellers</Link>
                <Link>Add Product</Link>
              ))
            </Stack>
          </Box>
        ) : null}
      </Box>
      <AdModal showModal={showModal} />
    </>
  );
}
