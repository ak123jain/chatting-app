// import axios from 'axios'
 
// import React, { useEffect } from 'react'

// const Profile = () => {

//   const [data , setdata] = React.useState(null)


//    useEffect(()=>{
//     const fetcheduser = async()=>{
//       try {
//         const response = await axios.get('http://localhost:8000/users/profile', {
//           withCredentials: true,
//         })
//         console.log("User profile fetched successfully:", response.data.data);
//         alert(response.data.message)
         
//         setdata(response.data.data)
        
//       } catch (error) {
//         console.log("An error occurred:", error);
//       }
//     }
//     fetcheduser()
//    },[])

//   return (
//     <div>
//     { data  ? (
       
//         <div key={data._id}>
//           <p>{data.username}</p>
//           <p>{data.email}</p>
//           <p>{data.fullname}</p>
//           <p>{data.createdAt}</p>
//           <img src={data.avatar} alt="User Profile" />
//         </div>
      
//     ) : (
//       <div>
//         <h1>No Data</h1>
//       </div>
//     )}
//   </div>
  
//   )
// }

// export default Profile


import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchedUser = async () => {
      try {

        
        const token = localStorage.getItem("accessToken"); // Assuming you store it in localStorage

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
        console.log("User profile fetched successfully:", response.data.data);
        alert(response.data.message);
        setData(response.data.data);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };
    fetchedUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      
      {/* Professional Big Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">User Profile</h1>
      
      {data ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full flex justify-between items-center">
          
          {/* Left Section: User Info */}
          <div className="w-2/3">
            <h2 className="text-left text-2xl font-semibold text-gray-900">username :{data.username}</h2>
            <p className="text-gray-600 text-left text-lg">Email :{data.email}</p>
            <p className="text-gray-700 font-medium text-left text-lg">fullname :{data.fullname}</p>
            <p className="text-gray-500 text-sm text-left mt-2">
              Joined: {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Right Section: Profile Image */}

          <div className="w-1/3 flex justify-end">
            <img
              src={data.avatar}
              alt="User Profile"
              className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
            />
          </div>
          
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">No Data</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;