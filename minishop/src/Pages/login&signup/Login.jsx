
// import { Button } from "@chakra-ui/button";
// import { FormControl } from "@chakra-ui/form-control";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { Input } from "@chakra-ui/input";
// import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
// import {
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalOverlay,
// } from "@chakra-ui/modal";
// import { useContext, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContextProvider";
// import { GoogleButton } from "react-google-button";

import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";

import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";
import { GoogleButton } from "react-google-button";


// const userInit = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const [user, setUser] = useState(userInit);
//   const [error, setError] = useState("");
//   const emailRef = useRef(null);

//   const { loginUser, forgotPassword, continueWithGoogle } =
//     useContext(AuthContext);

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.type]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await loginUser(user.email, user.password);
//       console.log("Logged In");
//     } catch (e) {
//       setError(e.message);
//       console.log(e.message);
//     }
//   };

//   const forgotPasswordHandler = async () => {
//     const email = emailRef.current.value;
//     if (email)
//       try {
//         await forgotPassword(email);
//         console.log("RESET mail sent");
//       } catch (e) {
//         setError(e.message);
//         console.log(e.message);
//       }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Login</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={user.email}
//           placeholder="email"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           value={user.password}
//           placeholder="password"
//           onChange={handleChange}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//       <GoogleButton onClick={continueWithGoogle} />
//       <Link onClick={onOpen} color={"blue.500"}>
//         Forgot password?
//       </Link>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalBody>
//             <Flex
//               minH={"50vh"}
//               align={"center"}
//               justify={"center"}
//               bg="gray.50"
//             >
//               <Stack
//                 spacing={4}
//                 w={"full"}
//                 maxW={"md"}
//                 bg="white"
//                 rounded={"xl"}
//                 boxShadow={"lg"}
//                 p={6}
//                 my={12}
//               >
//                 <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
//                   Reset password
//                 </Heading>
//                 <Text fontSize={{ base: "sm", sm: "md" }} color="gray.800">
//                   You&apos;ll get an email with a reset link
//                 </Text>
//                 <FormControl id="email">
//                   <Input
//                     placeholder="your-email@example.com"
//                     _placeholder={{ color: "gray.500" }}
//                     type="email"
//                     ref={emailRef}
//                   />
//                 </FormControl>
//                 <Stack spacing={6}>
//                   <Button
//                     bg={"blue.400"}
//                     color={"white"}
//                     _hover={{
//                       bg: "blue.500",
//                     }}
//                     onClick={forgotPasswordHandler}
//                   >
//                     Request Reset
//                   </Button>
//                 </Stack>
//               </Stack>
//             </Flex>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default Login;
