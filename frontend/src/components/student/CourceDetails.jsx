import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CourceDetails = () => {

  const {id } = useParams();
  console.log("receibed id",id);
  
  const [data , setdata] = useState(null)

  console.log("data received", data);
  

  useEffect(()=>{
    const fetched = async() =>{
     try {
       
       const response = await axios.get(`http://localhost:8000/cources/${id}`)
       console.log("responseee hgyuguyg" , response.data.data);
       
       setdata(response.data)
     } catch (error) {
      console.log("an errre ocurred",error);
      if (error.response) {
        console.log("Server responded with:", error.response.status, error.response.data);
      }
     }
      
    }

    fetched()

  },[id])

  // whwenever i use async await the i directly pass the data and compulsory rap in useEffect and for prevent re-render use useCallback
  // whenever i use don use async await the .then() syntax use 


  return (
    <div>
       <div className="details">
         <img src={data?.courcethumbnail} alt="kjjbuhvyhcgvgtf" />
         <p>{data?.courcelevel}</p>
         <p>{data?.courcetitle}</p>
         <p>{data?.price}</p>
       </div>
    </div>
  )
}

export default CourceDetails