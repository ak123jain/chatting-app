// import React from 'react'
// import khali from "../../assests/khali.jpg";
// import john from "../../assests/john.jpg";
// import haris from "../../assests/haris.jpg";

// const AlumniCards = () => {
//     const data = [{"id":1,"name":"John Doe",image:khali,"rating":5,"review":"Amazing product! Highly recommend to everyone."},
//      {"id":2,"name":"Jane Smith",image:john,"rating":4,"review":"Good quality, but delivery was a bit slow."},
//     {"id":3,"name":"Michael Brown","image": haris,"rating":5,"review":"Excellent customer service and great value!"},
// }
//   return (
//     <div>
//       <div className="cards">
//          {data.map((dataa , index)=>(
//             <div key={index} className="cap">
//                 <img src={dataa.image} alt="" />
//                 <p>{dataa.rating}</p>
//                 <p>{dataa.review}</p>
//             </div>
//          ))}
//       </div>
//     </div>
//   )
// }

// export default AlumniCards

import React from 'react';
import khali from "../../assests/khali.jpg";
import john from "../../assests/john.jpg";
import haris from "../../assests/haris.jpg";

const AlumniCards = () => {
    const data = [
        { id: 1, name: "John Doe", image: khali, rating: 5, review: "This product exceeded my expectations in every way! The quality is outstanding, and it works exactly as advertised. The attention to detail and craftsmanship are evident, making it a great investment." },
        { id: 2, name: "Jane Smith", image: john, rating: 4, review: "Good quality, but delivery was a bit slow.  I’ve been using it for a while now, and it has truly made a positive difference in my daily routine. The customer service was also fantastic, ensuring a smooth purchasing experience." },
        { id: 3, name: "Michael Brown", image: haris, rating: 5, review: "Excellent customer service and great value!  I highly recommend this to everyone looking for a reliable and high-quality product!  I highly recommend this to everyone looking for a reliable and high-quality product!" }
    ];

    
        return (
            <div className="flex flex-wrap justify-center gap-8 p-6 mt-40"> 
                {data.map((dataa, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-96 text-center transition-all hover:shadow-2xl">
                        {/* Square Image with Border & Shadow */}
                        <img src={dataa.image} alt={dataa.name} 
                             className="w-28 h-28 mx-auto mb-4 object-cover border-2 border-gray-300 shadow-md" />
                        
                        <h3 className="text-xl font-semibold">{dataa.name}</h3>
                        <p className="text-yellow-500 text-lg">{"⭐".repeat(dataa.rating)}</p>
                        <p className="text-gray-600 mt-2">{dataa.review}</p>
                    </div>
                ))}
            </div>
        );
    
};

export default AlumniCards;


