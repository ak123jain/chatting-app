// import axios from 'axios';
// import React, { useState } from 'react'

// const SignUp = () => {

//   const [name, setName] =  useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [avatar, setAvatar] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [avatarPreview, setAvatarPreview] = useState(''); // For displaying preview
//   const navigate = useNavigate();

//   const handleavatarchange = (e) =>{
//     const file = e.target.files[0];

//     setAvatar(file);

//     const  reader = new FileReader();

//     reader.onloadend = () =>{
//        setAvatarPreview(reader.result);
//     }

//     reader.readAsDataURL(file);

//   }

//   const handlesubmit = async (e) =>{
//     e.preventDefault();

//     const formdata = new FormData();

//     formdata.append("name", name);
//     formdata.append("username", username);  
//     formdata.append("email", email);
//     formdata.append("password", password);
//     formdata.append("avatar", avatar);


//   try {
//       const response = await axios.post('http://localhost:8000/users/register' , formdata , {})
  
//       console.log('Response:', response.data);
//       alert('Registration successful!');
  
//   } catch (error) {
//     console.error('Error registering user:', error.response?.data || error.message);
//     alert('Registration failed. Please try again.');
//   }


//   }


//   return (
//     <div>
//       <h2>Create An Account</h2>

//       {avatarPreview ?  (
//         <div className="avatar-preview">
//         <img src={avatarPreview} alt="Avatar Preview" />
//     </div>
//       ):(
//         <div className="avatar-placeholder">
//             <p>Image Preview</p>
//           </div>
//       )}



//       <form onSubmit={handlesubmit}>
         
//             <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleavatarchange}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />

        
//       </form>
//     </div>
//   )
// }

// export default SignUp


import axios from "axios";
 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullname, setfullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(""); // For displaying preview
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", response.data);
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Create An Account
        </h2>

        {/* Avatar Preview */}
        <div className="flex flex-col items-center mb-4">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
          ) : (
            <div className="w-24 h-24 flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border-2 border-gray-300">
              No Image
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />
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
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="w-full border px-4 py-2 rounded-lg bg-white"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <p>
            Already have an account ? <Link to='/Login' > <span> login in  </span> </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;