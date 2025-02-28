// import axios from 'axios'
// import React from 'react'

// const Login = () => {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)
  

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const response = await axios.post("http://localhost:8000/users/login", {
//       email,
//       password
//     })
//   }
//   return (
//     <div>
//       <div>
//         <h1>login</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login

import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("username", username);
  console.log("email", email);
  console.log("password", password);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fromdata = new FormData();
    fromdata.append("username", username);
    fromdata.append("email", email);
    fromdata.append("password", password);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/loggedin`, fromdata, {
        headers: {
          'Content-Type': 'application/json',
      },
      withCredentials : true
      });

      console.log("Login Successful:", response.data);
      const { accessToken } = response.data.data;

        // Store accessToken in localStorage
        localStorage.setItem("accessToken", accessToken);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Login to Your Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0116 0H4z"
                  />
                </svg>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
