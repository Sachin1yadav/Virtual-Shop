import React, {useRef, useState } from "react";
import {
  useToast,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Text,
  FormControl,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate} from "react-router-dom";
import "./Login.scss";
import GoogleButton from "react-google-button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import {useDispatch, useSelector} from 'react-redux'
import { loginWithGoogle, userLogin } from "../redux/Auth/auth.actions";
import { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
const userInit = {
  email: "",
  password: "",
};
const DLogin = () => {
  const {isauth}=useSelector(val=>val.authUser)
  const dispatch  = useDispatch();
  const nav = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState(userInit);
  const emailRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(user))
  };
 useEffect(()=>{
    if(isauth === true){
      window.location.href='/'
    } // went to the home page after login
 },[isauth])

  const forgotPasswordHandler = async () => {
    const email = emailRef.current.value;
    if (email)
      try {
        console.log("RESET mail sent");
      } catch (e) {
      }
  };

  return (
   <div className="MainDivLog">
        <div className="boxLog">
          <div className="formLog">
            <form onSubmit={handleSubmit} action="">
              <div className="LogHomeDiv">
              <h2>Login</h2>
              <div>
              <Link to="/" >

                  <h3 className="home"><AiFillHome/></h3>
                
                </Link>
                </div>
              
              </div>
              <div className="inputBoxLog">
              <span>Email</span>
                <input
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required="required"
                />
              
                <i></i>
              </div>
              <div className="inputBoxLog">
              <span>Password</span>
                <input
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  required="required"
                />
                 
                <i></i>
              </div>
              <div className="forgetPassLog">
              <Link onClick={onOpen} color={"blue.500"}>
                Forgot password?
              </Link>
              </div>
              <div className="DivsubmitLog">
                  <button
                    className="submitLog"
                    type="submit"
                    onClick={() =>
                     { toast({
                        title: "Login successfull.",
                        description: "We've Loged in your account.",
                        status: "success",
                        position:'top-right',
                        duration: 9000,
                        isClosable: true,
                      })
                      nav("/");
                      }
                    }
                  >
                    Login
                  </button>
              </div>
              <div className="orDivLog">
                <p>Or login with</p>
              </div>
              <div  className="LogGoogle">
              <GoogleButton style={{marginLeft:"-20px",color:"white",width:"100%",borderRadius:"5px",backgroundColor:"black",border:"1px solid gray" }}  onClick={()=>dispatch(loginWithGoogle())} />
​
              </div>
              <div className="signDivLog">
                <p>Have You Not Register Yet?</p>
                <Link to="/sign">
                  <h6 className="signLog">Register</h6>
                </Link>
              </div>
               <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex
                      minH={"50vh"}
                      align={"center"}
                      justify={"center"}
                      bg="gray.50"
                    >
                      <Stack
                        spacing={4}
                        w={"full"}
                        maxW={"md"}
                        bg="white"
                        rounded={"xl"}
                        boxShadow={"lg"}
                        p={6}
                        my={12}
                      >
                        <Heading
                          lineHeight={1.1}
                          fontSize={{ base: "2xl", md: "3xl" }}
                        >
                          Reset password
                        </Heading>
                        <Text
                          fontSize={{ base: "sm", sm: "md" }}
                          color="gray.800"
                        >
                          You&apos;ll get an email with a reset link
                        </Text>
                        <FormControl id="email">
                          <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: "gray.500" }}
                            type="email"
                            ref={emailRef}
                          />
                        </FormControl>
                        <Stack spacing={6}>
                          <Button
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                            onClick={forgotPasswordHandler}
                          >
                            Request Reset
                          </Button>
                        </Stack>
                      </Stack>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </form>
          </div>
      </div>
    </div>
  );
};
export default DLogin;