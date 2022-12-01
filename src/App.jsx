import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './css/PenanggulanganSinopsis.css'

import { Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import PenanggulanganPage from './Pages/PenanggulanganPage'

import './css/readmore.css'
// import Testing from './Components/Testing'
import Login from "./Components/Logres/Login";
import Register from "./Components/Logres/Register";
import FetchDampak from './Components/Dampak/FetchDampak'
import ProtectedRoutes from './ProtectedRoutes'
import AdminPage from './admin/AdminPage'
import AdminCrud from './admin/AdminCrud'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUsPage'
import KomunitasPage from './Pages/KomunitasPage'
// import Forum from './Pages/Forum'
// import './css/style-penanggulangan.css'

function App() {

  return (
    <>
    
      {/* <Navbar/> */}
      {/* <Testing/> */}
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        {/* <Route element={<ProtectedRoutes/>}> */}
          <Route path="/pencegahan" element={<PenanggulanganPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/dashboard" element={<HomePage/>} />
          <Route path="/komunitas" element={<KomunitasPage/>} />
          <Route path="/dampak" element={<FetchDampak/>}/>
        {/* </Route> */}
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin-crud" element={<AdminCrud/>}/>
        {/* <Route path="/forum" element={<Forum/>}/>  */}
      </Routes>
      {/* <Footer/> */}
    </>
  
    )
}

export default App
