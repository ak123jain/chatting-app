// import React from 'react'

// const Navbarr = () => {
//   return (
//     <div>
//       <h1>navbar eduvcator fooetr</h1>
//     </div>
//   )
// }

// export default Navbarr


import React from "react";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <nav className="bg-[#4071ba] text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/educator/dashboard">Gyan Setu</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/educator/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/educator/my-cource" className="hover:text-gray-300">
            My Courses
          </Link>
        </li>
        <li>
          <Link to="/educator/add-cource" className="hover:text-gray-300">
            Add Course
          </Link>
        </li>
        <li>
          <Link to="/educator/student-enrolled" className="hover:text-gray-300">
            Enrolled Students
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">
        Logout
      </button>
    </nav>
  );
};

export default Navbarr;
