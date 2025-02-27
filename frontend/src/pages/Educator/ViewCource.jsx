// import axios from 'axios';
 
// import React, { useEffect, useState } from 'react'

// const ViewCource = () => {

//     const [data , setdata] = useState([])


//      useEffect(()=>{
//         const  fetchedcource = async ()=>{
//             try {
    
//                 const response = await axios.get('http://localhost:8000/cources/containcource' )
//                 console.log("Cource added succesfully:", response.data.message);
//                 if (Array.isArray(response.data.message)) {
//                     setdata(response.data.message);
//                 }
                 
//                 alert("Cource added succesfully!");
//             } catch (error) {
//                 console.log("An error occurred:", error);
                
//             }
//         }

//         fetchedcource()

//      }, [])


//   return (
//     <div>
//        <div className="data">
//          { Array.isArray(data) && data.length > 0 ? (
//               data.map((cource)=>(
//                 <li key={cource._id} >
//                     <p>{cource.courcetitle}</p>
//                     <p>{cource.courcelevel}</p>
//                     <p>{cource.price}</p>
//                     <p>{cource.creator}</p>
//                     <img src={cource.courcethumbnail} alt="kjjbuhvyhcgvgtf" />
//                 </li>
                
//               ))
//          ) : (
//             <div>
//                <h1>no data</h1>
//             </div>
//          )}
//        </div>
//     </div>
//   )
// }

// export default ViewCource

import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCource = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchedcource = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/cources/containcource`);
        console.log("Cource added successfully:", response.data.message);
        if (Array.isArray(response.data.message)) {
          setdata(response.data.message);
        }
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchedcource();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Courses</h1>

      <div className="max-w-6xl mx-auto">
        {Array.isArray(data) && data.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((cource) => (
              <li key={cource._id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
                <img src={cource.courcethumbnail} alt="Course Thumbnail" className="w-full h-40 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-semibold text-gray-800">{cource.courcetitle}</h2>
                <p className="text-gray-600 text-sm mb-2">{cource.courcelevel}</p>
                <p className="text-gray-700 font-semibold">${cource.price}</p>
                {cource.creator && <p className="text-gray-500 text-xs mt-1">By {cource.creator}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center items-center h-64">
            <h1 className="text-2xl text-gray-500">No Data Available</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCource;
