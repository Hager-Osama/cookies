
import React from 'react'
import SearchFoodDesgin from './SearchFoodDesgin'

const SearchFoodDate = () => {
    const data=[
        {
            imageFood:require("../../images/Pizza.png"),
            title:`Pizza`
        },
        {
            imageFood:require("../../images/Burger.png"),
            title:`Burger`
        },
        {
            imageFood:require("../../images/Noodles.png"),
            title:`Noodles`
        },
        {
            imageFood:require("../../images/Subsandiwch.png"),
            title:`Sub-sandiwch`
        },
        {
            imageFood:require("../../images/Chowmein.png"),
            title:`Chowmein`
        },
        {
            imageFood:require("../../images/Steak.png"),
            title:`Steak`
        },

    ]

    const items=data.map((d)=>(
    <SearchFoodDesgin
    imageFood={d.imageFood}
    title = {d.title}
    />
    ))

  return (
    <div div style={{backgroundColor:"#FEFAF1" ,padding:"82px 0px"}}>
    <div className='container d-flex justify-content-between'>
    <div className='textFood'>
    <h1 style={{marginBottom:"80px"}}>Search by Food</h1>
    </div>
    <div className='iconsarrow'>
        <span>View All <i class="fa-solid fa-chevron-right"></i></span>
        <span><i class="fa-solid fa-chevron-left"></i></span>
        <span> <i class="fa-solid fa-chevron-right"></i> </span>
    </div>
    </div>

    <div className='container d-flex justify-content-center '>
      {items}
    </div>
    </div>
  )
}

export default SearchFoodDate
