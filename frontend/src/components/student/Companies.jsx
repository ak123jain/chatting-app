// import React from 'react'

// const Companies = () => {
//   return (
//     <div>
//       <div className="row">

//       </div>
//     </div>
//   )
// }

// export default Companiesa


import React from "react";

const companies = [
  { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 2, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 3, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { id: 4, name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
  { id: 5, name: "Facebook", logo: "data:image/png;base64,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" },
  { id: 6, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 7, name: "Spotify", logo: "data:image/jpeg;base64,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" },
  { id: 8, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { id: 9, name: "Twitter", logo: "https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png?h=350" },
  { id: 10, name: "LinkedIn", logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" }
];

const Companies = () => {
  return (
    <div className="w-full bg-gray-100 py-9 overflow-hidden mt-36">
         
          {/* Heading */}
      <div className="header mt-1 mb-10">
        <h2 className="text-center text-3xl font-semibold">Collaboration with Companies</h2>
      </div>
        
      <div className="whitespace-nowrap">
        
        {/* Scrollable container with continuous looping */}
        <div className="inline-flex animate-scroll space-x-12">
          {/* Add multiple sets of companies for a seamless loop */}
          {companies.concat(companies).map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto" // Increased height for better visibility
              />
            </div>
          ))}
           
        </div>
      </div>
    </div>
  );
};

export default Companies;