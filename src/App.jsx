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
import AboutUsPage from './Pages/AboutUsPage'
import KomunitasPage from './Pages/KomunitasPage'
import ContactUsPage from './Pages/contactUsPage'
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      {/* <Testing/> */}
      <Routes>
        {/* <Route path="/" element={<Login/>}/>  */}
        <Route path="/" element={<ContactUsPage/>}/> 
        {/* <Route path="/" element={<KomunitasPage/>}/>  */}
        {/* <Route path="/dashboard" element={<HomePage/>} />
        <Route path="/penanggulangan" element={<PenanggulanganPage/>}/>
        <Route path="/dampak" element={<FetchDampak/>}/>
        <Route path="/register" element={<Register/>}/>*/}
        {/* <Route path="/aboutUs" element={<AboutUsPage/>}/>   */}
      </Routes>
      <Footer/>
    </>
  
    )
}

export default App
