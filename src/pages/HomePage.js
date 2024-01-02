import NavBar from'../component/NavBar'
import React from 'react'
import Header1 from '../component/header'
import '../index.css'

import IconSectionData from '../component/icons/iconSectionData'
import ReactCardDate from '../component/ReactCardDate'
import FlashDealsData from '../component/flashDeals/FlashDealsData'
import FeaturedData from '../component/Featured Restaurants/FeaturedData'
import SearchFoodDate from '../component/SearchbyFood/SearchFoodDate'
import Design from '../component/design/Design'
import Installation from '../component/InstallApp/installation'
import DetailsCardData from '../component/Details Card/DetailsCardData'
import Last from '../component/last/last'
import Footer from '../component/Footer/Footer'
import SecondFooter from '../component/Footer/SecondFooter'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Header1/>
      <FlashDealsData/>
      
      <IconSectionData/>
      <ReactCardDate/>
      <FeaturedData/>
      <SearchFoodDate/>
      <Design/>
      <Installation/>
      <DetailsCardData/>
      <Last/>
      <Footer/>
      <SecondFooter/>
    </div>
  )
}

export default HomePage
