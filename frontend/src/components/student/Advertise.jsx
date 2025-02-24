// import React from 'react'
// import Book from '../../assests/book.png'

// const Advertise = () => {
//   return (
//     <div>
//       <div className="img">
//         <img src={Book} alt="" />
//       </div>
//       <div className="para">
//         <h1>A Broad Selection of Courses</h1>
//         <p>Our expert counsellors will help you choose the right course.</p>
//       </div>
//     </div>
//   )
// }

// export default Advertise


import React from 'react';
import Book from '../../assests/Book.png';

const Advertise = () => {
  return (
    <div className="flex items-center justify-between  p-12 rounded-lg gap-2 mt-12">
      {/* Text Section */}
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">A Broad Selection of Courses</h1>
        <p className="text-gray-600 mt-4 text-lg">Our expert counsellors will help you choose the right course.</p>
      </div>

      {/* Image Section */}
      <div className="w-1/2 flex justify-end">
        <img src={Book} alt="Book" className="w-96 h-auto object-cover" />
      </div>
    </div>
  );
};

export default Advertise;
