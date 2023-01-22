import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Payment.css";

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
      <Heading>Delivery Address</Heading>
      <form
        id="form"
        onSubmit={handleSubmit}
        style={{ margin: "auto", marginTop: "3rem" }}
        action=""
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={address.house}
            onChange={handleChange}
            placeholder="house"
            required
          />
          <input
            type="text"
            value={address.city}
            onChange={handleChange}
            placeholder="city"
            required
          />
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={address.colony}
            onChange={handleChange}
            placeholder="colony"
            required
          />
          <input
            type="text"
            value={address.state}
            onChange={handleChange}
            placeholder="state"
            required
          />
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={address.country}
            onChange={handleChange}
            placeholder="country"
            required
          />
          <input
            type="text"
            value={address.pincode}
            onChange={handleChange}
            placeholder="pincode"
            required
          />
        </div>

        <input
          type="text"
          value={address.landmark}
          onChange={handleChange}
          placeholder="landmark"
          required
        />
        <input
          type="text"
          value={address.phone}
          onChange={handleChange}
          placeholder="phone"
          required
        />
        <button ml={0} colorScheme="blue" size="sm" fontSize="sm">
          use this address
        </button>
      </form>
    </div>
  );
};

export default Address;
