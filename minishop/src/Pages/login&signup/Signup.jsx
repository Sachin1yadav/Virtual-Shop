import React, { useContext, useEffect, useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import { Link ,useNavigate} from "react-router-dom";
import "./Sign.scss";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/Auth/auth.actions";
const userInit = {
  email: "",
  password: "",
  name:""
};
const Signup = () => {
  const toast = useToast();
  const [user, setUser] = useState(userInit);
  const nav = useNavigate();
   const isAuth = useSelector(val=>val.authUser.isauth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(userSignup(user.email, user.password,user.name,toast));
  };

useEffect(()=>{
if(isAuth){
  nav("/")
}
},[isAuth])

  return (
    <div className="MainDiv">
        <div className="box ">
          <div className="form">
            <form onSubmit={handleSubmit} action="">
            <div className="SingHomeDiv">
              <h2>Register</h2>
              <div>
              <Link to="/" >
                 
                  <h3 className="homeSing"><AiFillHome/></h3>
                
                </Link>
                </div>
              
              </div>
              <div className="inputBox">
              <span>Name</span>
                <input 
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required="required" />
                
                <i></i>
              </div>
              <div className="inputBox">
              <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required="required"
                />
                
                <i></i>
              </div>
              <div className="inputBox">
              <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required="required"
                />
           
                <i></i>
              </div>
              <div className="signDiv">
                <p>Already have an account?</p>
                <Link to="/Login">
                  <h6 className="sign">Login</h6>
                </Link>
              </div>
              <div>
                  <Button
                  type="submit"
                    className="submit"
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
export default Signup;