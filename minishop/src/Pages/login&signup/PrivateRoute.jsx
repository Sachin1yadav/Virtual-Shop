import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider";
import { useToast } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const toast = useToast();

  if (!isAuth) {
    toast({
      title: "Login required",
      status: "error",
      description: "Please login first.",
      isClosable: true,
    });
    return <Navigate to="/sign" />;
  }

  return children;
};

export default PrivateRoute;
