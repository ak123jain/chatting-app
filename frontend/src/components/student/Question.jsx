// import React, { useState } from 'react'

// const Question = () => {

//     const faqs = [
//         { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
//         { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
//         { question: "What are components in React?", answer: "Components are the building blocks of a React application." },
//         { question: "What is state in React?", answer: "State is an object that holds data and determines the component's behavior." }
//       ];

//       const [ openind ,setopenind] = useState([])

//       const togglefaq = (index) =>{
//         setopenind(index === openind ? null : index)
//       }

//   return (
//     <div>
//       <div className="head">
//         <h1>Frequent Asked Question</h1>
//       </div>
//       <div className="question">
//         {faqs.map((faq , index)=>(
//             <div key={index} className="">
//                 <button onClick={()=> togglefaq(index)} >
//                     {faq.question}
//                     <span>{ openind === index ? "▲" : "▼" }</span>
//                 </button>
//                 {openind === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
//             </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Question


import React, { useState } from "react";
import question from "../../assests/question.jpg";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is ReactJS?",
      answer:
        "ReactJS is a JavaScript library for building user interfaces, developed by Facebook. It helps in creating reusable UI components.",
    },
    {
      question: "How does useState work?",
      answer:
        "The useState hook is used to create and manage state in a functional component. It returns a state variable and a function to update it.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows you to build modern and responsive designs quickly.",
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-20">
      {/* Image (More Visible and Adjusted) */}
      <img 
        src={question} 
        alt="FAQ" 
        className="absolute right-[-60px] top-[-50px] w-40 h-40 object-cover rounded-full shadow-2xl drop-shadow-lg brightness-110 contrast-110"
      />

      {/* FAQ Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border bg-white p-4 rounded-lg shadow-md">
            <button
              className="w-full text-left font-semibold flex justify-between items-center p-3 bg-gray-200 hover:bg-gray-300 rounded-md transition duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 p-3 border-t transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
