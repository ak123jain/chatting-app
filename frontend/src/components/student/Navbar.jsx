// // import React from 'react'
// // import logo from "../../assests/logo.jpg"; 
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {

// //   const iscourcelistpage = location.pathname.includes("/cource-list")

// //   return (

     
// //     <div>
// //       <img src={logo} alt="" />

// //       <div>
// //         <div>
// //           <button>Become Educator</button>
// //           <Link to="/my-enrollment">My Enrollement</Link>
// //         </div>
// //       </div>
// //       <button>Create account</button>


// //       <div></div>


    



// //     </div>
// //   )
// // }

// // export default Navbar

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../../assests/logo.jpg"; // Ensure correct path
// import akash from  "../../assests/akash.jpg"
// import { Search } from "lucide-react"; // Import search icon

// const Navbar = () => {
//   const location = useLocation();
//   const isCourseListPage = location.pathname.includes("/cource-list");

//   return (
//     <nav className={`flex justify-between items-center p-4 bg-white shadow-md ${isCourseListPage ? "bg-white" : "bg-gray-100"}`}>
//       {/* Bigger Logo */}

//       <Link to="/">
//         <img src={logo} alt="Logo" className="h-20 w-auto  ml-4" /> {/* Increased size */}
//       </Link>

//       <div  className="relative w-1/3" >
//         <input type="text" placeholder="Search cources"  className="w-full p-2 pl-10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
//         <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
//       </div>

//       {/* Navigation Links */}
//       <div className="flex items-center space-x-6">
//         {!isCourseListPage && (
//           <button className="px-4 py-2 bg-[#4071ba] text-white rounded-lg hover:bg-[#4071ba]">
//             Become Educator
//           </button>
//         )}

//         <Link to="/my-enrollment" className="text-gray-700 hover:text-blue-600">
//           My Enrollment
//         </Link>

//         <button className="px-4 py-2 border border-[#4071ba] text-[#4071ba] rounded-lg hover:bg-blue-100">
//           Create Account
//         </button>

//         <div className="profile-pht">
//            <Link to="/profile" ><img src={akash} alt="akshuu"    className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 hover:scale-110 transition" /></Link>
//         </div>

//       </div>
//     </nav>
//   );
// };


// export default Navbar;



import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assests/logo.jpg"; // Ensure correct path
import akash from "../../assests/akash.jpg";
import { Search } from "lucide-react"; // Import search icon
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/cource-list");

  const [searchterm, setSearchTerm] = useState("");
  const [cources, setCources] = useState([]);

  const fetchCources = useCallback(async () => {
    if (!searchterm.trim()) return; // Prevent empty requests
    try {
      const response = await axios.get(`http://localhost:8000/cources/searchcource?query=${searchterm}`);
      setCources(response.data.data);
      console.log("cource data", response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }, [searchterm]);  // ✅ Fix: Added searchterm as a dependency
  
  useEffect(() => {
    fetchCources();
  }, [fetchCources]); // ✅ No error now
  
  

  return (
    <nav className={`flex justify-between items-center p-4 bg-white shadow-md ${isCourseListPage ? "bg-white" : "bg-gray-100"}`}>
      {/* Bigger Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-20 w-auto ml-4" />
      </Link>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search courses"
          className="w-full p-2 pl-10 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchterm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />

        {/* Search Result Dropdown */}
        {searchterm && cources.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
            {cources.map((course) => (
              <li key={course._id} className="flex items-center gap-3 p-2 hover:bg-gray-100">
                <img src={course.courcethumbnail} alt={course.courcetitle} className="w-12 h-12 rounded-md object-cover" />
                <p className="font-semibold">{course.courcetitle}</p>
                <p>cource price : {course.price}</p>
                <p>cource level : {course.courcelevel}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {!isCourseListPage && (
            <Link to="/educator/educator" >  
            <button className="px-4 py-2 bg-[#4071ba] text-white rounded-lg hover:bg-[#4071ba]">
            Become Educator
          </button>
            </Link>
        )}

        <Link to="/my-enrollment" className="text-gray-700 hover:text-blue-600">
          My Enrollment
        </Link>

        <Link to={"/signup"} >
        <button className="px-4 py-2 border border-[#4071ba] text-[#4071ba] rounded-lg hover:bg-blue-100">
          Create Account
        </button>
        </Link>

        <div className="profile-pht">
          <Link to="/profile">
            <img
              src={akash}
              alt="akshuu"
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 hover:scale-110 transition"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
