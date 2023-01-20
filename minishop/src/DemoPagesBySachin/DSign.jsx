import React from 'react'
import { useToast, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Sign.css"
const DSign = () => {
  const toast = useToast();
  return (
    <div> 
      <div className='whole'>
       <div className="box glow">
       <div className="form">
          <h2>Register</h2>
          <div className="inputBox">
            <input required="required" />
            <span>Name</span>
            <i></i>
          </div>
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
            <p>Already have an accountt?</p>
            <Link to="/sign">
              <h6 className="sign">Login</h6>
            </Link>
          </div>

          <div>
                  <Link  to="/" >
          <Button className="submit"
      onClick={() =>
        toast({
          title: 'Register successfull.',
          description: "Your Account have created.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Register
    </Button>
    </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DSign