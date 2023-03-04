import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SinglePage from "../Pages/SingleProduct/SinglePage";
import Admin from "../admin/adminHome/Admin";
import AdminLogin from "../admin/adminAuth/AdminLogin";
import AdminContext from "../admin/adminContext/AdminContext";
import Signup from "../Pages/login&signup/Signup";
import Login from "../Pages/login&signup/Login";
import Cart from "../Pages/Cart/Cart";
import Address from "../Pages/checkout/Address";
import Payment from "../Pages/checkout/Payment";
import PrivateRoute from "../Pages/login&signup/PrivateRoute";
import Order from "../Pages/Order/Order";
import Wishlist from "../Pages/Wishlist/Wishlist";
import AllUsers from "../admin/adminComp/AllUsers";
import AllSellers from "../admin/adminComp/AllSellers";
import Products from "../Pages/Products/Products";
function Allroute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/products/:Categories" element={<Products />}></Route>
        <Route path="/data/:id" element={   
            <PrivateRoute>
            <SinglePage />
            </PrivateRoute>
            
            } />
        <Route
          path="/admin"
          element={
            <AdminContext>
              <Admin />
            </AdminContext>
          }
        ></Route>
        <Route
          path="/admin/users"
          element={
            <AdminContext>
              <AllUsers />
            </AdminContext>
          }
        ></Route>
        <Route
          path="/admin/sellers"
          element={
            <AdminContext>
              <AllSellers />
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
        <Route path="/Login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
    </>
  );
}
export default Allroute;
