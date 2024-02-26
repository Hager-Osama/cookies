import NavBar from'../component/navbar/NavBar'
import React from 'react'
import Header1 from '../component/header'
import '../index.css'
import IconSectionData from '../component/icons/iconSectionData'
import ReactCardDate from '../component/card/ReactCardDate'
import SearchFoodDate from '../component/SearchbyFood/SearchFoodDate'
import Design from '../component/design/Design'
import Installation from '../component/InstallApp/installation'
import DetailsCardData from '../component/Details Card/DetailsCardData'
import Last from '../component/last/last'
import Footer from '../component/Footer/Footer'
import SecondFooter from '../component/Footer/SecondFooter'
import { MealsList } from '../component/flashDeals/FlashDealsData'


const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Header1/>
      <MealsList/>
      <IconSectionData/>
      <ReactCardDate/> 
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
