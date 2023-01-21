import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const initAdress = {
  house: "",
  colony: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  landmark: "",
  phone: "",
};

const Address = () => {
  const [address, setAddress] = useState(initAdress);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.placeholder]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    <Navigate to="/payment" />;
  };

  console.log(address);
  return (
    <div>
      <h1>Delivery Address</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={address.house}
          onChange={handleChange}
          placeholder="house"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.city}
          onChange={handleChange}
          placeholder="city"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.colony}
          onChange={handleChange}
          placeholder="colony"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.state}
          onChange={handleChange}
          placeholder="state"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.country}
          onChange={handleChange}
          placeholder="country"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.pincode}
          onChange={handleChange}
          placeholder="pincode"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.landmark}
          onChange={handleChange}
          placeholder="landmark"
          required
        />
        <br />
        <br />
        <input
          type="text"
          value={address.phone}
          onChange={handleChange}
          placeholder="phone"
          required
        />
        <br />
        <br />
        <input type="submit" title="use this address" />
      </form>
    </div>
  );
};

export default Address;
