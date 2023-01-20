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
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, AddIcon } from "@chakra-ui/icons";
import {useDispatch, } from 'react-redux'
import { adminLogout } from "../../redux/admin_auth/admin.actions";
const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function AdminNav({handleCategory}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const handleSignout = ()=>{
    dispatch(adminLogout())
  } 

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w="20" cursor={"pointer"} rounded="2xl" overflow="hidden">
              <Image src="https://user-images.githubusercontent.com/80110392/213411141-41dba86a-52b0-44f4-9b7a-79ccbd7e1885.png" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>
              <Select onChange={handleCategory} placeholder="Select Catagory">
                  <option value="t_shirt">T-shirt</option>
                  <option value="Jacket">Jacket</option>
                  <option value="watch">Watch</option>
                  <option value="mobile">Mobile</option>
                  <option value="Headphones">Headphone</option>
                  <option value="bags">Bag</option>
                  <option value="shoes">Shoes</option>
              </Select>
              </NavLink>
              <NavLink>
                Users
              </NavLink>
              <NavLink>
                Sellers
              </NavLink>
              <NavLink>Product
              <AddIcon mx='4' fontSize={'sm'} /> 
              </NavLink>
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
