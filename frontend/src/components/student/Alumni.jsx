// import React from 'react'
// import download from '../../assets/download.png'
// import justdial from '../../assets/justdial.png'
// import urab from '../../assets/urab.jpg'
// import images from '../../assets/images.jpg'

// const Alumni = () => {
//   return (
//     <div>
//       <div className="haer">
//         <h1>What our Alumni says</h1>
//       </div>
//       <div className="cards">
//         <img src={download} alt="" />
//         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       </div>
//       <div className="cards">
//         <img src={justdial} alt="" />
//         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       </div>
//       <div className="cards">
//         <img src={urab} alt="" />
//         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       </div>
//       <div className="cards">
//         <img src={images} alt="" />
//         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//       </div>
//     </div>
//   )
// }

// export default Alumni


import React from "react";
import download from "../../assests/download.png";
import justdial from "../../assests/justdial.png";
import urab from "../../assests/urab.jpg";
import local from "../../assests/local.png";

const Alumni = () => {
  return (
    <div className="p-6  mt-20">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">What Our Alumni Say</h1>
      </div>

      {/* Layout: Video on the Left & Cards on the Right */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* YouTube Video on the Left */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BQTaBibVbo4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Alumni Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-1/2">
          {[download, justdial, urab, local].map((imgSrc, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
                <img src={imgSrc} alt="Alumni" className="w-20 h-20 mx-auto object-contain rounded mb-2" />
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;