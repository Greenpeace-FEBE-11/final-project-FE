import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import PenanggulanganPage from './Pages/PenanggulanganPage'

import './css/readmore.css'
import Testing from './Components/Testing'
import Login from "./Components/Logres/Login";
import Register from "./Components/Logres/Register";
import FetchDampak from './Components/Dampak/FetchDampak'
import Profile from './Components/Profile/Profile'
import EditProfile from './Components/Profile/EditProfile'
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
    {/* <Profile /> */}
      {/* <Navbar/> */}
      {/* <Testing/> */}
      <Routes>
        {/* <Route path="/" element={<Login/>}/> 
        <Route path="/dashboard" element={<HomePage/>} />
        <Route path="/penanggulangan" element={<PenanggulanganPage/>}/>
        <Route path="/dampak" element={<FetchDampak/>}/>
        <Route path="/register" element={<Register/>}/>  */}
        {/* <Route path='/profile' element={<Profile/>}/> */}
        <Route path='/editprofile/:id' element={<EditProfile/>}/>
      </Routes>
      {/* <Footer/> */}
    </>
  
    )
}

export default App
