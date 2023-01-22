import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import DLogin from "../../DemoPagesBySachin/DLogin";

const PrivateRoute = ({ children }) => {
  const isauth = useSelector((val) => val.authUser.isauth);
  const toast = useToast();
  const nav = useNavigate()
  if (isauth) {
    return children;
  }else{
    toast({
      title: "Login required",
      status: "error",
      position:'top-right',
      description: "Please login first.",
      isClosable: true,
    });
    nav('/DLogin') 
    return <DLogin/>
  }
};

export default PrivateRoute;
