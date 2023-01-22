import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SingleProduct/SinglePage";
import Admin from "../admin/adminHome/Admin";
import AdminLogin from "../admin/adminAuth/AdminLogin";
import AdminContext from "../admin/adminContext/AdminContext";
import DSign from "../DemoPagesBySachin/DSign";
import DLogin from "../DemoPagesBySachin/DLogin";
import Cart from "../Pages/Cart/Cart";
import Address from "../Pages/checkout/Address";
import Payment from "../Pages/checkout/Payment";
import PrivateRoute from "../Pages/login&signup/PrivateRoute";
import Order from "../Pages/Order/Order";
import Wishlist from "../Pages/Wishlist/Wishlist";

import AllUsers from "../admin/adminComp/AllUsers";
import AllSellers from "../admin/adminComp/AllSellers";
import Products from "../Pages/products/Products";



function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login/>} />
        <Route path="/sign" element={<Sign/>} /> */}
        <Route path="/products/:Categories" element={<Products />}></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />


        {/* <Route path="/products" element={<Products/>}></Route> */}
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/order" element={<Order/>} />

        <Route path="/cart" element={<PrivateRoute> <Cart/> </PrivateRoute> } />
         <Route path="/products/:Categories" element={<Products/>}></Route> 


        <Route path="/data/:id" element={<SinglePage />}></Route>
        <Route
          path="/admin"
          element={
            <AdminContext>
              <Admin />{" "}
            </AdminContext>
          }
        ></Route>
        <Route
          path="/admin/users"
          element={
            <AdminContext>
              <AllUsers />{" "}
            </AdminContext>
          }
        ></Route>
        <Route
          path="/admin/sellers"
          element={
            <AdminContext>
              <AllSellers />{" "}
            </AdminContext>
          }
        ></Route>
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        {/* demoRoutes........................ */}
        <Route path="/DLogin" element={<DLogin />} />
        <Route path="/sign" element={<DSign />} />
      </Routes>
    </>
  );
}

export default Allroute;
