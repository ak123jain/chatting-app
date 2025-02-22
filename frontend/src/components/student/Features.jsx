// import React from 'react'

// const Features = () => {
//   return (
//     <div>
//       <div className="head">
//         <h1>Popular Topics</h1>
//       </div>
//       <div className="btn">
//         <button>web development</button>
//       </div>
//       <div className="btn">
//         Data science
//       </div>
//       <div className="btn">
//         Artificial intelligence
//       </div>
//       <div className="btn">
//         Machine learning
//       </div>
//       <div className="btn">
//         Cloud computing
//       </div>
//       <div className="btn">
//         Cybersecurity
//       </div>
//       <div className="btn">
//         Blockchain
//       </div>
//     </div>
//   )
// }

// export default Features

import React from "react";
 

const Features = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Popular Topics</h1>
      </div>

      {/* Buttons in a row */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Web Development",
          "Data Science",
          "Artificial Intelligence",
          "Machine Learning",
          "Cloud Computing",
          "Cybersecurity",
          "Blockchain",
        ].map((topic, index) => (
            <button
              key={index}
              className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              {topic}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Features;

