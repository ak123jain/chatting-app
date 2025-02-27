// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';

// const AddCource = () => {

//     const [courcelevel, setcourcelevel] = useState("");
//     const [courcetitle, setcourcetitle] = useState("");
//     const [price, setprice] = useState("");
//     const [description, setdescription] = useState("");
//     const [creator  , setcreator] = useState("");
//     const[image , setimage] = useState(null);

   

//     const handleimage = (e) =>{
//         const image = e.target.file[0]
//         setimage(image)
//     }

//     const  onhandlesubmit = async (e) => {
//         e.preventDefault()

//         const formdata = new FormData();
//         formdata.append("courcelevel", "beginner");
//         formdata.append("courcetitle", "React");
//         formdata.append("price", "500");
//         formdata.append("creator", "John Doe");
//         formdata.append("description", "React is a library for building user interfaces");

//         if (image) {
//             formdata.append("image", image);
//         }


//         try {
//             const  response = await axios.post('http://localhost:8000/cources/newcource', formdata, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 withCredentials : true,
//             })

//             console.log('product added succesfully:', response.data.data)
//             console.log('product added succesfully:', response.data.messege)
//         } catch (error) {
//             console.log("An error occurred:", error);
            
//         }
//     }
//   return (
//     <div>
//       <h1>jfnrkjfnr</h1>
//     </div>
//   )
// }

// export default AddCource


import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCource = () => {
  const [courcelevel, setcourcelevel] = useState("");
  const [courcetitle, setcourcetitle] = useState("");
  const [courcedescription, setcourcedescription] = useState(""); // Updated here
  const [price, setprice] = useState("");
  const [creator, setcreator] = useState("");
  const [courcethumbnail, setcourcethumbnail] = useState(null);

  const handlecourcethumbnail = (e) => {
    const selectedcourcethumbnail = e.target.files[0]; // Fixed `files[0]`
    setcourcethumbnail(selectedcourcethumbnail);
  };

  const onhandlesubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("courcelevel", courcelevel);
    formdata.append("courcetitle", courcetitle);
    formdata.append("courcedescription",  courcedescription); // Updated here
    formdata.append("price", price);
    formdata.append("creator", creator);

    if (courcethumbnail) {
      formdata.append("courcethumbnail", courcethumbnail);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/cources/newcource`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log("Cource added succesfully:", response.data);
      alert("Cource added succesfully!");
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Failed to add cource.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add Cource</h1>
      <form onSubmit={onhandlesubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Cource Level"
          value={courcelevel}
          onChange={(e) => setcourcelevel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Cource Title"
          value={courcetitle}
          onChange={(e) => setcourcetitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Description" // Updated here
          value={courcedescription}
          onChange={(e) =>  setcourcedescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Creator Name"
          value={creator}
          onChange={(e) => setcreator(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input type="file" onChange={handlecourcethumbnail} className="w-full p-2 border border-gray-300 rounded" />

         <Link to={"/educator/view-cource"}>
         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Cource
        </button>
         </Link>
      </form>
    </div>
  );
};

export default AddCource;
