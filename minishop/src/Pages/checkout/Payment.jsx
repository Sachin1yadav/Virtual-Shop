import { Box, Spacer, useToast } from "@chakra-ui/react";
import Cleave from "cleave.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initDetails = {
  creditCardNum: "",
  cardHolder: "",
  expireMonth: "January",
  expireYear: "2021",
};

const Payment = () => {
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
    <div>
      <h1>Enter you Credit Card details</h1>
      <Box>
        <Spacer h="100" />
        <div>
          <form id="form" onSubmit={handleSubmit}>
            <div>
              <div>
                <div>
                  <h5>Card Holder</h5>
                  <h3>{details.cardHolder}</h3>
                </div>
                <div>
                  <h5>Expires</h5>
                  <h3>
                    {details.expireMonth} / {details.expireYear}
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <h4>Enter card number</h4>
              {/* <Cleave
                delimiter="-"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged: handleType,
                }}
                onChange={handleNum}
                placeholder="Please enter your credit card number"
              /> */}
              <input
                type="text"
                name="creditCardNum"
                value={details.creditCardNum}
                onChange={handleChange}
              />
            </div>

            <div>
              <h4>Card Holder</h4>
              <input
                onChange={handleChange}
                type="text"
                name="CardHolder"
                required
              />
            </div>

            <div>
              <div>
                <h4>Expiration Year</h4>
                <select value={details.expireMonth} onChange={handleChange} required={true}>
                  <option name="January" value="January">January</option>
                  <option name="February" value="February">February</option>
                  <option name="March" value="March">March</option>
                  <option name="April" value="April">April</option>
                  <option name="May" value="May">May</option>
                  <option name="June" value="June">June</option>
                  <option name="July" value="July">July</option>
                  <option name="August" value="August">August</option>
                  <option name="September" value="September">September</option>
                  <option name="October" value="October">October</option>
                  <option name="November" value="November">November</option>
                  <option name="December" value="December">December</option>
                </select>
              </div>
              <div>
                <h4>Month</h4>
                <select value={details.expireMonth} onChange={handleChange} required>
                  <option name="2024" value="2024">2024</option>
                  <option name="2024" value="2025">2025</option>
                  <option name="2024" value="2026">2026</option>
                  <option name="2024" value="2027">2027</option>
                  <option name="2024" value="2028">2028</option>
                  <option name="2024" value="2029">2029</option>
                  <option name="2030" value="2030">2030</option>
                  <option name="2031" value="2031">2031</option>
                  <option name="2024" value="2032">2032</option>
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
