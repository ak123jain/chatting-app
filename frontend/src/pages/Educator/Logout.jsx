// import axios from 'axios';
// import React, { useEffect } from 'react'


// const Logout = () => {

//      useEffect(()=>{
//         const logout = async()=>{
//             try {
//                 const response = await axios.post('http://localhost:8000/users/logout',{}, {
//                     withCredentials: true,
//                 });
//                 console.log("Logout successful:", response.data.message);
//                 alert(response.data.message);
                
//             } catch (error) {
//                 console.log("An error occurred:", error);
                
//             }
//         }
//         logout()
//      }, [])

//   return (
//     <div>
//         <h1>Logout Page</h1>
//     </div>
//   )
// }

// export default Logout

import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/users/logout",
          {},
          { withCredentials: true }
        );
        console.log("Logout successful:", response.data.message);
        alert(response.data.message);

        // Redirect to login after logout
        navigate("/login");
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    logout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900">Logging out...</h1>
        <p className="text-gray-600 mt-2">Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default Logout;
