import React, { useState } from "react";

const initAdress = {
  house: "",
	colony:"",
  city: "",
  state: "",
  country: "",
  pincode: "",
  landmark: "",
  phone: "",
};

const Checkout = () => {
  const [address, setAddress] = useState(initAdress);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.placeholder]: e.target.value });
  };

  console.log(address);

  return (
    <div>
      <h1>Delivery Address</h1>
      <form action="">
        <input
          type="text"
          value={address.house}
          onChange={handleChange}
          placeholder="house"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.city}
          onChange={handleChange}
          placeholder="city"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.colony}
          onChange={handleChange}
          placeholder="colony"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.state}
          onChange={handleChange}
          placeholder="state"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.country}
          onChange={handleChange}
          placeholder="country"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.pincode}
          onChange={handleChange}
          placeholder="pincode"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.landmark}
          onChange={handleChange}
          placeholder="landmark"
        />
        <br />
        <br />
        <input
          type="text"
          value={address.phone}
          onChange={handleChange}
          placeholder="phone"
        />
        <br />
        <br />
      </form>
			<h1>Enter you Credit Card details</h1>
			<form action="">
				<input type="text" placeholder="" />
				<input type="text" />
				<input type="text" />
			</form>
    </div>
  );
};

export default Checkout;
