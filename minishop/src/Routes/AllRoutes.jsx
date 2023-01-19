import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SingleProduct/SinglePage";

function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} /> */}
        {/* <Route path="/cart" element={<Cart/>} /> */}
        {/* <Route path="/products" element={<Products/>}></Route> */}
        <Route path="/data/:id" element={<SinglePage/>}></Route>
        
      </Routes>
    </>
  );
}

export default Allroute;