import { Route, Routes } from "react-router-dom";
import Admin from "../admin/adminHome/Admin";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SingleProduct/SinglePage";
import DSign from"../DemoPagesBySachin/DSign"
import DLogin from"../DemoPagesBySachin/DLogin"
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
<<<<<<< HEAD
        {/* demoRoutes........................ */}
          <Route path="/DLogin" element={<DLogin/>} />
        <Route path="/sign" element={<DSign/>} />
=======
        <Route path="/admin" element={<Admin/>}></Route>
>>>>>>> e17fd959bf55b932057e4091556bab4189ae8f71
      </Routes>
    </>
  );
}

export default Allroute;