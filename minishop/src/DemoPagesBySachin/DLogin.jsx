import React from 'react'
import { useToast, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Login.scss"
const DLogin = () => {
  const toast = useToast();
  return (
    <div> 
      <div className='whole'>
       <div className="box glow">
       <div className="form">
          <h2>Login</h2>

          <div className="inputBox">
            <input required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input required="required" />
            <span>Password</span>
            <i></i>
          </div>

          <div className="signDiv">
            <p>Have You Not Register Yet?</p>
            <Link to="/sign">
              <h6 className="sign">Register</h6>
            </Link>
          </div>

          <div>
                  <Link  to="/" >
          <Button className="submit"
      onClick={() =>
        toast({
          title: 'Login successfull.',
          description: "We've Loged in your account.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Login
    </Button>
    </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DLogin