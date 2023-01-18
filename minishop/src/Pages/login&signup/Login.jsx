import { useState } from "react";

const userInit = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(userInit);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEG0FcdN3o0i2qhj7UFZ_9xuniIQ-FCh8`,
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
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={user.email} onChange={handleChange} />
        <input type="password" value={user.password} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
