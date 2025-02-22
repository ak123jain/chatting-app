// import React from 'react'
// import logo from "../../assests/logo.jpg"; // Ensure correct path
// import facebook from "../../assests/facebook.svg";
// import twitter from "../../assests/twitter_icon.svg";
// import linkedin from "../../assests/linkedin.svg";
// import youtube from "../../assests/youtube.svg";
// import instagram from "../../assests/instagram.svg";
// import phone from "../../assests/phone-call.png";
// import email from "../../assests/email.png";

// const Footer = () => {
//   return (
//     <div>
//       <div className="img">
//         <img src={logo} alt="" />
//       </div>
//       <p>Gyansetu offers top professional training certification courses designed to enhance your skills and advance your career, providing industry-relevant knowledge and practical expertise.</p>
//       <div className="logo">
//         <img src={facebook} alt="" />
//         <img src={twitter} alt="" />
//         <img src={linkedin} alt="" />
//         <img src={youtube} alt="" />
//         <img src={instagram} alt="" />
//       </div>
//       <div className="container">
//         <h1>Popular Programs</h1>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>ccucumber training platform such as gkjrhgkiej</p>

//       </div>
//       <div className="container">
//         <h1>Popular Programs</h1>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
//         <p>ccucumber training platform such as gkjrhgkiej</p>
        
//       </div>
//       <div className="lower">
//         <div className="phone">
//           <img src={phone} alt="" />
//           <p></p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <img src={email} alt="Email" className="w-5 h-5" />
//           <p>contact@gyansetu.com</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import logo from "../../assests/logo.jpg"; // Ensure correct path
import facebook from "../../assests/facebook.svg";
import twitter from "../../assests/twitter_icon.svg";
import linkedin from "../../assests/linkedin.svg";
import youtube from "../../assests/youtube.svg";
import instagram from "../../assests/instagram.svg";
import phone from "../../assests/phone-call.png";
import email from "../../assests/email.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-6 text-center mt-20 ">
      {/* Logo */}
      <div className="img mb-4">
        <img src={logo} alt="Logo" className="mx-auto w-32" />
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-xl mx-auto mb-4">
        Gyansetu offers top professional training certification courses designed to enhance your skills and advance your career, providing industry-relevant knowledge and practical expertise.
      </p>

      {/* Social Media Icons */}
      <div className="logo flex justify-center space-x-4 mb-6">
        <img src={facebook} alt="Facebook" className="w-6 h-6" />
        <img src={twitter} alt="Twitter" className="w-6 h-6" />
        <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        <img src={youtube} alt="YouTube" className="w-6 h-6" />
        <img src={instagram} alt="Instagram" className="w-6 h-6" />
      </div>

      {/* Popular Programs */}
      <div className="grid grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-6">
        <div className="container">
          <h1 className="text-lg font-bold mb-2">Popular Programs</h1>
          <p>Big Data Hadoop Training in Gurgaon, Delhi – Gyansetu</p>
          <p>Python Full Stack Development Training</p>
          <p>Cloud Computing Certification</p>
          <p>Machine Learning & AI Training</p>
        </div>
        <div className="container">
          <h1 className="text-lg font-bold mb-2">Other Courses</h1>
          <p>Web Development Bootcamp</p>
          <p>Java Spring Boot Course</p>
          <p>React.js & Node.js Training</p>
          <p>Data Science with Python</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="lower flex flex-col sm:flex-row items-center justify-center space-x-6 mt-6 text-gray-700">
        <div className="flex items-center space-x-2">
          <img src={phone} alt="Phone" className="w-5 h-5" />
          <p>+91 98765 43210</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={email} alt="Email" className="w-5 h-5" />
          <p>contact@gyansetu.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
