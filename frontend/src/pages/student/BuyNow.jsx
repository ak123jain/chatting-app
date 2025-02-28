// // import axios from 'axios';
// // import React, { useState } from 'react'

// // const BuyNow = ({courceId}) => {

// //     const [loading , setloading] = useState(false)


// //     const handlepayment = async()=>{
// //         setloading(true)
// //         try {
// //             const {data} = await axios.post(`http://localhost:8000/orders/createorder/${courceId}`,
// //                 {amount : 1000},
// //                 {withCredentials : true}
// //             )
// //             console.log("data received",data);
// //             if (!data || !data.data) {
// //                 console.log("No data received");
// //                 alert("No data received");
// //                 return;
// //             }

// //             const {orderId , amount} = data.data;

// //              // Step 2: Load Razorpay SDK dynamically
// //              const script = document.createElement("script");
// //               script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //             script.async = true;
// //             document.body.appendChild(script);

// //            script.onload = () => {
// //             const options = {
// //              key: "YOUR_KEY_ID", // Replace with actual Razorpay key
// //              amount: amount * 100, // Amount in paise
// //              currency: "INR",
// //              name: "Acme Corp",
// //              description: "Test Transaction",
// //              image: "https://example.com/your_logo",
// //              order_id: orderId,
// //           handler: async function (response) {
// //             alert("Payment Successful!");
// //             alert(`Payment ID: ${response.razorpay_payment_id}`);
// //             alert(`Order ID: ${response.razorpay_order_id}`);

// //             // Step 3: Verify payment on the backend
// //             await axios.post(
// //               "http://localhost:8000/payment/verify",
// //               {
// //                 razorpay_payment_id: response.razorpay_payment_id,
// //                 razorpay_order_id: response.razorpay_order_id,
// //                 razorpay_signature: response.razorpay_signature,
// //                 userId: "USER_ID", // Replace with actual user ID
// //                 courseId,
// //               },
// //               { withCredentials: true }
// //             );
// //           },
// //           prefill: {
// //             name: "Gaurav Kumar",
// //             email: "gaurav.kumar@example.com",
// //             contact: "9000090000",
// //           },
// //           notes: {
// //             address: "Razorpay Corporate Office",
// //           },
// //           theme: {
// //             color: "#3399cc",
// //           },
// //         };

// //         const rzp = new window.Razorpay(options);
// //         rzp.on("payment.failed", function (response) {
// //           alert("Payment Failed!");
// //           alert(response.error.description);
// //         });

// //         rzp.open();
// //       };
// //     } catch (error) {
// //       console.error("Payment failed", error);
// //       alert("Payment Failed");
// //     }
// //         setLoading(false);
// //       }
// //   }


// //   return (
// //     <div>
// //       <h1>akash .co</h1>
// //     </div>
// //   )


// // export default BuyNow

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
  const { courceId } = useParams(); // Get courceId from URL params
  const [loading, setloading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handlepayment = async () => {
    setloading(true);
    try {
      const token = localStorage.getItem("accessToken")
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders/createorder/${courceId}`,
        { amount: 1000 },
         {
          headers: {
            Authorization: `Bearer ${token}`,
        },
         }
      );

      if (!data?.data) {
        alert('No order data received');
        return;
      }

      const { orderId, amount } = data.data;

      await loadRazorpayScript();

      const options = {
        key:  "rzp_test_RY9m6Nigypx0B2", // Replace with your Razorpay Key ID
        amount: amount * 100,
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: orderId,
        handler: async function (response) {
          alert('Payment Successful!');
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);

          try {
            await axios.post(
              '${import.meta.env.VITE_API_URL}/payment/verify',
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userId: 'USER_ID', // Replace with actual user ID
                courceId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
              },
              }
            );
          } catch (error) {
            console.error('Payment verification failed', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9000090000',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert('Payment Failed!');
        alert(response.error.description);
      });

      rzp.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment Failed');
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    handlepayment(); // Trigger payment on component mount
  }, []);

  return (
    <div>
      <h1>Processing Payment...</h1>
    </div>
  );
};

export default BuyNow;



 























  