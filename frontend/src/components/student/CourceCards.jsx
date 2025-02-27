// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // const CourceCards = () => {

// //   const  [cources , setcources] = useState([])

// //   useEffect(()=>{
// //     axios.get('').then((response)=>{
// //       setcources(response)
// //     }).catch((error)=>{
// //       console.log("Error fetching eooer" , error);
      
// //     })
// //   } , [])
// //   return (
// //     <div>
// //       <h1>Popular cources</h1>
// //       <p>Learn the most demanding skills in industry and grab the highest salary packages.</p>
// //       <div className="dislpaly">
// //         {cources.map((cource)=>{
// //           <div key={cource.id} className="display">
// //             <img src={cource.image} className="img" alt="" />
// //             <h1>{cource.title}</h1>
// //             <p>{cource.description}</p>
// //             <button>
// //               Enroll
// //             </button>
// //           </div>
// //         })}
// //       </div>
// //     </div>
// //   )
// // }

// // export default CourceCards


 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CourceCards = () => {
//   const [cources, setCources] = useState([]);

//   useEffect(() => {
//     // Replace with the correct API URL
//     axios.get('http://localhost:8000/cources/publishedcource') 
//       .then((response) => {
//         console.log("received data" , response.data);
        
//          if (Array.isArray(response.data.data)) {
//           setCources(response.data.data); 
//          } // Assuming response.data is an array of courses

//       })
//       .catch((error) => {
//         console.error("Error fetching courses", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Popular Courses</h1>
//       <p>Learn the most demanding skills in the industry and grab the highest salary packages.</p>
//       <div className="display">
//         { Array.isArray(cources) && cources.length > 0 ? (
//           cources.map((cource) => (
//             <div key={cource._id} className="display-item">
//               <img 
//                 src={cource.courcethumbnail} 
//                 className="img" 
//                 alt={cource.courcetitle || 'Course Image'} 
//               />
//               <h2>{cource.courcetitle}</h2>
//               <p>{cource.courcedescription}</p>
//               <p><strong>Level:</strong> {cource.courcelevel}</p>
//               <p><strong>Price:</strong> ${cource.price}</p>
//               <button>Enroll</button>
//             </div>
//           ))
//         ) : (
//           <p>No courses available at the moment.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourceCards;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CourceCards = () => {
  const [cources, setCources] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${import.meta.env.VITE_API_URL}/cources/publishedcource`)
      .then((response) => {
        console.log('API Response:', response.data); // Log the response data to check its structure
        
        // Ensure the response contains the 'data' field and it is an array
        if (Array.isArray(response.data.data)) {
          setCources(response.data.data);  // Set state to response.data.data (the array of courses)
        } else {
          console.error('API response data is not an array:', response.data.data); // Log an error if 'data' is not an array
        }
      })
      .catch((error) => {
        console.error('Error fetching courses:', error); // Handle errors
      });
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Courses</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Learn the most demanding skills in the industry and grab the highest salary packages.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Safeguard to ensure 'cources' is an array before calling map */}
        {Array.isArray(cources) && cources.length > 0 ? (
          cources.map((cource) => (
            <div key={cource._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img
                src={cource.courcethumbnail}
                className="w-full h-48 object-cover rounded-md mb-4"
                alt={cource.courcetitle || 'Course Image'}
              />
              <h2 className="text-xl font-semibold text-gray-800">{cource.courcetitle}</h2>
              <p className="text-gray-600 mb-4">{cource.courcedescription}</p>
              <p className="text-gray-800 font-medium"><strong>Level:</strong> {cource.courcelevel}</p>
              <p className="text-gray-800 font-medium mb-4"><strong>Price:</strong> ${cource.price}</p>
              <Link to={`/cources/${cource._id}`} >
               <button className="px-20 py-2 bg-[#4071ba] text-white rounded-md hover:bg-blue-700 transition" >view details</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CourceCards;
