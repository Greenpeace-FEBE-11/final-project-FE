import React from 'react'
import AboutUs from '../Components/HomePage/AboutUs'
import ContactUs from '../Components/HomePage/ContactUs'
import Dampak from '../Components/HomePage/Dampak'
import FetchDampakSinopsis from '../Components/HomePage/FetchDampakSinopsis'
import HomePageBG from '../Components/HomePage/HomePageBG'
import PenanggulanganSinopsis from '../Components/HomePage/PenanggulanganSinopsis'
import Navbar from '../Components/Navbar'


function HomePage() {
  return (
    <div id="HomePagee">
      <Navbar/>
        <HomePageBG/>
        <PenanggulanganSinopsis/>
        <AboutUs/>
        <ContactUs/>
        {/* <Dampak/> */}
        <FetchDampakSinopsis/>
    </div>    
  )
}

export default HomePage