import { Box, Heading, Spacer, Text, useToast } from "@chakra-ui/react";
// import Cleave from "cleave.js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const initDetails = {
  creditCardNum: "",
  cardHolder: "",
  expireMonth: "January",
  expireYear: "2024",
};

const Payment = () => {
  
  const totalAmount = useSelector((store)=> store.cart.totalPrice)
  console.log('totalAmount:', totalAmount)

  const [details, setDetails] = useState(initDetails);

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Order Placed",
      description: "Your Order Will Be Delivered in 5-6 Days",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <div style={{height:"40rem"}}>
      <Heading>Enter you Credit Card details</Heading>
      <Text fontSize={20}>Total Amount will be deduct ₹ {totalAmount}</Text>
      <Box>
        <Spacer h="100" />
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            width: "40%",
            margin: "auto",
            marginBottom:"10rem",
            height:"20rem",
          }}
        >
          <form id="form" onSubmit={handleSubmit}>
            
            <div className="input-container mt">
              <h4>Enter card number</h4>
              <input
                type="number"
                name="creditCardNum"
                value={details.creditCardNum}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <h4>Card Holder Name</h4>
              <input
                onChange={handleChange}
                type="text"
                name="CardHolder"
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                gap: "3rem",
              }}
            >
              <div>
                <h4>Expiration Month</h4>
                <select
                  value={details.expireMonth}
                  name="expireMonth"
                  onChange={handleChange}
                  required={true}
                >
                  <option name="January" value="January">
                    January
                  </option>
                  <option name="February" value="February">
                    February
                  </option>
                  <option name="March" value="March">
                    March
                  </option>
                  <option name="April" value="April">
                    April
                  </option>
                  <option name="May" value="May">
                    May
                  </option>
                  <option name="June" value="June">
                    June
                  </option>
                  <option name="July" value="July">
                    July
                  </option>
                  <option name="August" value="August">
                    August
                  </option>
                  <option name="September" value="September">
                    September
                  </option>
                  <option name="October" value="October">
                    October
                  </option>
                  <option name="November" value="November">
                    November
                  </option>
                  <option name="December" value="December">
                    December
                  </option>
                </select>
              </div>
              <div>
                <h4>Year</h4>
                <select
                  value={details.expireYear}
                  name="expireYear"
                  onChange={handleChange}
                  required={true}
                >
                  <option name="2024" value="2024">
                    2024
                  </option>
                  <option name="2025" value="2025">
                    2025
                  </option>
                  <option name="2026" value="2026">
                    2026
                  </option>
                  <option name="2027" value="2027">
                    2027
                  </option>
                  <option name="2028" value="2028">
                    2028
                  </option>
                  <option name="2029" value="2029">
                    2029
                  </option>
                  <option name="2030" value="2030">
                    2030
                  </option>
                  <option name="2031" value="2031">
                    2031
                  </option>
                  <option name="2032" value="2032">
                    2032
                  </option>
                </select>
              </div>
              <div>
                <h4>CVV</h4>
                <input type="password" placeholder="CVV" required />
              </div>
            </div>

            <button>Submit Payment</button>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Payment;
