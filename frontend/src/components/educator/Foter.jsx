// import React from 'react'

// const Foter = () => {
//   return (
//     <div>
//       <h1>   </h1>
//     </div>
//   )
// }

// export default Foter


import React from "react";

const Foter = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-48">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold">Gyan Setu - Empowering Educators</h2>
        <p className="text-sm mt-2">
          A platform designed for educators to share knowledge and grow together.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Gyan Setu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Foter;
