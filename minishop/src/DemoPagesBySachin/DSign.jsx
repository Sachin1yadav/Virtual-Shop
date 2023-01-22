import React, { useContext, useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Sign.css";
import { AuthContext } from "../Pages/login&signup/AuthContextProvider";
const userInit = {
  email: "",
  password: "",
};
const DSign = () => {
  const toast = useToast();
  const [user, setUser] = useState(userInit);
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user.email, user.password);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div>
        <div className="box ">
          <div className="form">
            <form onSubmit={handleSubmit} action="">
              <h2>Register</h2>
              <div className="inputBox">
                <input required="required" />
                <span>Name</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required="required"
                />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  required="required"
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className="signDiv">
                <p>Already have an account?</p>
                <Link to="/DLogin">
                  <h6 className="sign">Login</h6>
                </Link>
              </div>
              <div>
                  <Button
                  type="submit"
                    className="submit"
                    onClick={() =>
                      toast({
                        title: "Register successfull.",
                        description: "Your Account have created.",
                        status: "success",
                        position:'top-right',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Register
                  </Button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};
export default DSign;