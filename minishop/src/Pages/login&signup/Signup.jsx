// import React, { useContext, useState } from "react";
// import { AuthContext } from "./AuthContextProvider";

// const userInit = {
//   email: "",
//   password: "",
// };

// const Signup = () => {
//   const [user, setUser] = useState(userInit);
//   const [error, setError] = useState("");
//   const { createUser } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.type]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createUser(user.email, user.password);
//     } catch (e) {
//       setError(e.message);
//       console.log(e.message);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1>Signup</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={user.email}
//           placeholder="email"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           value={user.password}
//           placeholder="password"
//           onChange={handleChange}
//           border="1px solid black"
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default Signup;
