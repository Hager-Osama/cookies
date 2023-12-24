import React from 'react'

const SearchFoodDesgin = ({imageFood,title}) => {
  return (
    
     <div className='container'>
      <div className='imagesFood'>
        <img  src={imageFood}/>
        <h6 className="text-center mt-2">{title}</h6>
      </div>
     </div>
   
  )
}

export default SearchFoodDesgin;
