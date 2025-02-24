import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import Advertise from '../../components/student/Advertise'
import CourceCards from '../../components/student/CourceCards'
import Features from '../../components/student/Features'
import Alumni from '../../components/student/Alumni'
import AlumniCards from '../../components/student/AlumniCards'
import Question from '../../components/student/Question'
 
 

const Home = () => {
  return (
    <div>
       <Hero />
        {/* Heading Outside the Gray Container */}
      
       <Companies />
       <Advertise />
       <CourceCards />
       <Features />
       <Alumni />
       <AlumniCards />
       <Question />
    </div>
  )
}

export default Home