import React, {useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, userLogin } from "../../redux/Auth/auth.actions";
import { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
const userInit = {
  email: "",
  password: "",
};
const Login = () => {
  const { isauth } = useSelector((val) => val.authUser);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState(userInit);
  const handleChange = (e) => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(user,toast));
    
  };
  useEffect(() => {
    if (isauth) {
      nav("/");
    } 
  }, [isauth]);

  return (
    <div className="MainDivLog">
      <div className="boxLog">
        <div className="formLog">
          <form onSubmit={handleSubmit} action="">
            <div className="LogHomeDiv">
              <h2>Login</h2>
              <div>
                <Link to="/">
                  <h3 className="home">
                    <AiFillHome />
                  </h3>
                </Link>
              </div>
            </div>
            <div className="inputBoxLog">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required="required"
              />
            </div>
            <div className="inputBoxLog">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required="required"
              />
            </div>
            <div className="forgetPassLog">
            </div>
            <div className="DivsubmitLog">
              <button
                className="submitLog"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="orDivLog">
              <p>Or login with</p>
            </div>
            <div className="LogGoogle">
              <GoogleButton
                style={{
                  marginLeft: "-20px",
                  color: "white",
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  border: "1px solid gray",
                }}
                onClick={() => dispatch(loginWithGoogle())}
              />
              ​
            </div>
            <div className="signDivLog">
              <p>Have You Not Register Yet?</p>
              <Link to="/sign">
                <h6 className="signLog">Register</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
