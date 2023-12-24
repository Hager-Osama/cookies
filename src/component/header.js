import React from 'react'
import ImageHeader from "../images/ImageHeader.png"

const Header1 = () => {
  return (
    <>
    <div className='app__header'>
     <div className='container d-flex justify-content-between'>
        <div className='app-left'>
          <h1>Are you starving?</h1>
          <p>Within a few clicks, find meals that are accessible near you</p>
            <div className='one'>
                <span><i className="fa-solid fa-motorcycle"></i>&nbsp;  Delivery </span>&nbsp;
                <span><i className="fa-solid fa-bag-shopping"></i>&nbsp;  Pickup </span>
            </div>
            <div className='two '>
                <span><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                <input type="text" placeholder="Enter Your Address" />
                <button type='button' className='btn'> <i className="fa-sharp fa-solid fa-magnifying-glass"></i> find food</button>
            </div>   
        </div>
        
        <div className=' app-right'>
         <div className='image-container'> 
           <img src={ImageHeader}/> 
         </div>
        </div>
                    
     </div>
    </div>
     </>
  )
}

export default Header1;
