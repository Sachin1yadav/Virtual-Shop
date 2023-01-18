import React, { useState } from "react";

const userInit = {
  email: "",
  password: "",
  returnSecureToken: true,
};

const Signup = () => {
  const [user, setUser] = useState(userInit);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpXbgsBXj0IdrvrNDfqbAg5dffxClesXo`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div>
        <h1>Signup</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={user.email} onChange={handleChange} />
        <input type="password" value={user.password} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
