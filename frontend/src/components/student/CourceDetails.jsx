// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const CourceDetails = () => {

//   const {id } = useParams();
//   console.log("receibed id",id);
  
//   const [data , setdata] = useState(null)

//   console.log("data received", data);
  

//   useEffect(()=>{
//     const fetched = async() =>{
//      try {
       
//        const response = await axios.get(`http://localhost:8000/cources/${id}`,{
//         withCredentials: true ,
//        })
//        console.log("responseee hgyuguyg" , response.data.data);
       
//        setdata(response.data.data)
//      } catch (error) {
//       console.log("an errre ocurred",error);
//       if (error.response) {
//         console.log("Server responded with:", error.response.status, error.response.data);
//       }
//      }
      
//     }

//     fetched()

//   },[id])

//   // whwenever i use async await the i directly pass the data and compulsory rap in useEffect and for prevent re-render use useCallback
//   // whenever i use don use async await the .then() syntax use 


//   return (
//     <div>
//        <div className="details">
//          <img src={data?.courcethumbnail} alt="kjjbuhvyhcgvgtf" />
//          <p>{data?.courcelevel}</p>
//          <p>{data?.courcetitle}</p>
//          <p>{data?.price}</p>
//        </div>
//     </div>
//   )
// }

// export default CourceDetails


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import google from "../../assests/google.jpg";
import jd from "../../assests/jd.jpg";
import microsoft from "../../assests/microsoft.jpg";
import  {Link} from "react-router-dom";

const CourceDetails = () => {
  const { id } = useParams();
  console.log("Received ID:", id);

  const [data, setData] = useState(null);
  console.log("Data received:", data);

  useEffect(() => {
    const fetched = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/cources/${id}`, {
          withCredentials: true,
        });
        console.log("Response:", response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log("An error occurred:", error);
        if (error.response) {
          console.log("Server responded with:", error.response.status, error.response.data);
        }
      }
    };

    fetched();
    
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      {data ? (
        <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left: Large Course Image */}
          <div className="flex items-center justify-center">
            <img
              src={data?.courcethumbnail}
              alt="Course Thumbnail"
              className="w-full max-w-md h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right: Course Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{data?.courcetitle}</h2>
            <p className="text-lg text-gray-600 mt-2 font-medium">{data?.courcelevel}</p>
            <p className="text-2xl font-bold text-green-600 mt-4">₹{data?.price}</p>

            {/* Enroll Button */}
            <Link to={`/Buynow/${data._id}`} >
            <button className="mt-5 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700">
              Enroll Me
            </button>
            </Link>

            {/* Features Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">
                <h2 className="text-lg font-semibold">Job Assured Program</h2>
                <p className="text-gray-600 text-sm">100% Assistance till you get a job</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">
                <h2 className="text-lg font-semibold">Expert Instruction</h2>
                <p className="text-gray-600 text-sm">Find the right instructor for you</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">
                <h2 className="text-lg font-semibold">Learning Assistants</h2>
                <p className="text-gray-600 text-sm">We guide when you are stuck</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center">
                <h2 className="text-lg font-semibold">Flexible Schedule</h2>
                <p className="text-gray-600 text-sm">Learn at your own pace</p>
              </div>
            </div>
          </div>

          {/* Company Logos - Full Width */}
          <div className="col-span-2 flex items-center justify-center space-x-10 mt-10">
            <img src={google} alt="Google" className="w-10 h-10 object-cover" />
            <img src={jd} alt="JD" className="w-10 h-10 object-cover" />
            <img src={microsoft} alt="Microsoft" className="w-10 h-10 object-cover" />
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading course details...</p>
      )}
    </div>
  );
};

export default CourceDetails;