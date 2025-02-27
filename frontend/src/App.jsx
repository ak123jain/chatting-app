import { Route, Routes, useMatch } from "react-router-dom"
import Home from "./pages/student/Home"
import MyEnrollment from "./pages/student/MyEnrollment"
import CourceList from "./pages/student/CourceList"
import Player from "./pages/student/Player"
import Loading from "./components/student/Loading"
import Educator from "./pages/Educator/Educator"
import Dashboard from "./pages/Educator/Dashboard"
import AddCource from "./pages/Educator/AddCource"
import EnrolledStudent from "./pages/Educator/EnrolledStudent"
import MyCources from "./pages/Educator/MyCources"
import Navbar from "./components/student/Navbar"
import Profile from "./pages/student/Profile"
import Footer from "./components/student/Footer"
import CourceExplain from "./pages/student/CourceExplain"
import SignUp from "./pages/student/SignUp"
import Login from "./pages/student/Login"
import ViewCource from "./pages/Educator/ViewCource"
import Logout from "./pages/Educator/Logout"
import BuyNow from "./pages/student/BuyNow"
 

const App = () => {
// navbar is saperate for educator route
  const isEducatorroute = useMatch("/educator/*")
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorroute && <Navbar />}
       
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cource-list" element={<CourceList />}></Route>
        <Route path="/cource-list/:input" element={<CourceList />}></Route>
        <Route path="/cources/:id" element={<CourceExplain />}></Route>
        <Route path="/my-enrollment" element={<MyEnrollment />}></Route>
        <Route path="/player/:courceId" element={<Player />}></Route>
        <Route path="/loading/:path" element={<Loading />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Buynow/:courceId" element={<BuyNow />}></Route>

        <Route path='/educator' element={<Educator />}>
               
               <Route path="educator" element={<Dashboard />} />
               <Route path="add-cource" element={<AddCource />} />
               <Route path="student-enrolled" element={<EnrolledStudent />} />
               <Route path="my-cource" element={<MyCources />} />
               <Route path="view-cource" element={<ViewCource />} />
               <Route path="Logout" element={<Logout />} />
                
        </Route>
      </Routes>

      {!isEducatorroute && <Footer />} {/* Footer added here */}

    </div>
  )
}

export default App