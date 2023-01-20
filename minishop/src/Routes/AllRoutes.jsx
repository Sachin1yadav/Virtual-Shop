import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SingleProduct/SinglePage";
import Admin from '../admin/adminHome/Admin'
import AdminLogin from '../admin/adminAuth/AdminLogin'
import AdminContext from "../admin/adminContext/AdminContext";
import DSign from"../DemoPagesBySachin/DSign";
import DLogin from"../DemoPagesBySachin/DLogin";
import Cart from "../Pages/Cart/Cart";
function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} /> */}
         <Route path="/cart" element={<Cart/>} /> 
        {/* <Route path="/products" element={<Products/>}></Route> */}
        <Route path="/data/:id" element={<SinglePage/>}></Route>
        <Route path="/admin" element={<AdminContext><Admin/> </AdminContext> }></Route>
        <Route path="/admin/login" element={<AdminLogin/>}></Route>
 
        {/* demoRoutes........................ */}
          <Route path="/DLogin" element={<DLogin/>} />
        <Route path="/sign" element={<DSign/>} />
 
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </>
  );
}

export default Allroute;