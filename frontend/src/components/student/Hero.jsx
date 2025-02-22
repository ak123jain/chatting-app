// import React from 'react'
// import hero from "../../assests/hero.webp"
// import approved from '../../assests/approved.png'

// const Hero = () => {
//   return (
//     <div>

//       <div className="hero-img">
//         <img src={hero} alt="" />
//       </div>
//       <div className="logo">
//         <img src={approved} alt="" />
//       </div>
//        <div>
//         <h1>Learn From The Top 1% Industry Experts</h1>
//         <p>Gyansetu, an innovative EdTech company, empowers learners through cutting-edge education solutions.</p>
//        </div>
        
//        <div className="boxes">
//         <div className="">
//           <h2>Job-Oriented Courses</h2>
//           <p>100% Assistance till you get job</p>
//         </div>
//         <div className="">
//           <h3>Expert Instruction</h3>
//           <p>Find the right instructor for you</p>
//         </div>
//         <div className="">
//           <h4>Learning Assistants</h4>
//           <p>We guide when you are stuck</p>
//         </div>
//         <div className="">
//           <h5>Lifetime Access</h5>
//           <p>Learn on your schedule</p>
//         </div>
//        </div>

//        <div className="btn">
//         <button>Explore Cources</button>
//        </div>


//     </div>
//   )
// }

// export default Hero


// import React from 'react'
// import hero from "../../assests/hero.webp"
// import approved from '../../assests/approved.png'

// const Hero = () => {
//   return (
//     <div className="bg-white py-16 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

//       {/* Left Side - Content */}
//       <div className="md:w-1/2 text-center md:text-left">
//         <h1 className="text-4xl font-bold text-gray-800 leading-tight">
//           Learn From The Top 1% Industry Experts
//         </h1>
//         <p className="text-gray-600 mt-4 text-lg">
//           Gyansetu, an innovative EdTech company, empowers learners through cutting-edge education solutions.
//         </p>

//         {/* Feature Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
//           <div className="border border-gray-300 p-6 rounded-xl bg-white">
//             <h2 className="font-semibold text-xl text-gray-900">Job-Oriented Courses</h2>
//             <p className="text-gray-600">100% Assistance till you get job</p>
//           </div>

//           <div className="border border-gray-300 p-6 rounded-xl bg-white">
//             <h2 className="font-semibold text-xl text-gray-900">Expert Instruction</h2>
//             <p className="text-gray-600">Find the right instructor for you</p>
//           </div>

//           <div className="border border-gray-300 p-6 rounded-xl bg-white">
//             <h2 className="font-semibold text-xl text-gray-900">Learning Assistants</h2>
//             <p className="text-gray-600">We guide when you are stuck</p>
//           </div>

//           <div className="border border-gray-300 p-6 rounded-xl bg-white">
//             <h2 className="font-semibold text-xl text-gray-900">Lifetime Access</h2>
//             <p className="text-gray-600">Learn on your schedule</p>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="mt-8">
//           <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition">
//             Explore Courses
//           </button>
//         </div>
//       </div>

//       {/* Right Side - Image Section */}
//       <div className="md:w-1/2 flex flex-col items-center md:items-end mt-10 md:mt-0">
//         {/* Main Hero Image */}
//         <img src={hero} alt="Hero" className="w-[450px] md:w-[500px] rounded-lg" />
        
//         {/* Approved Image Below the Hero Image */}
//         <div className="absolute top-[105%] right-[-5%]">
//           <img src={approved} alt="Approved" className="w-[220px] md:w-[250px] lg:w-[280px]" />
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Hero


import React from 'react'
import hero from "../../assests/hero.webp"
import approved from '../../assests/approved.png'

const Hero = () => {
  return (
    <div className="bg-white py-1 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mt-24">

      {/* Left Side - Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Learn From The Top 1% Industry 
          <span style={{ color: "#4071ba"  }} > Experts</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Gyansetu, an innovative EdTech company, empowers learners through cutting-edge education solutions.
        </p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border border-gray-300 p-6 rounded-xl bg-white">
            <h2 className="font-semibold text-xl text-gray-900">Job-Oriented Courses</h2>
            <p className="text-gray-600">100% Assistance till you get job</p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl bg-white">
            <h2 className="font-semibold text-xl text-gray-900">Expert Instruction</h2>
            <p className="text-gray-600">Find the right instructor for you</p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl bg-white">
            <h2 className="font-semibold text-xl text-gray-900">Learning Assistants</h2>
            <p className="text-gray-600">We guide when you are stuck</p>
          </div>

          <div className="border border-gray-300 p-6 rounded-xl bg-white">
            <h2 className="font-semibold text-xl text-gray-900">Lifetime Access</h2>
            <p className="text-gray-600">Learn on your schedule</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="px-8 py-4 bg-[#4071ba] text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end mt-10 md:mt-0">
        {/* Main Hero Image */}
        <img src={hero} alt="Hero" className="w-[350px] md:w-[400px] lg:w-[450px] rounded-lg" />

        {/* Approved Image - Exactly Below Hero Image */}
        <img src={approved} alt="Approved" className="w-[220px] md:w-[250px] lg:w-[280px] mt-4 shadow-lg shadow-gray-500 rounded-lg" />
      </div>

        

    </div>

    

  )
}

export default Hero
