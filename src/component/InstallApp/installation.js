import React from 'react'
import Mobileappstore  from '../../images/LightiPhonew/Mobileappstore.png'
import Mobileapp  from '../../images/LightiPhonew/Mobileappstore.png'
import Image from '../../images/LightiPhonew/hager.png'
const Installation = () => {
  return (
    <section className='installation'>
       <div className='container'>
        <div className='installationSection container d-flex flex-wrap justify-content-between '>

         <div className='installationImage'>
          <img src={Image}/>
         </div>
         <div className='installationText'>
          <h1 style={{color:"#FFB30E"}} >Install the app</h1>
          <p> It's never been easier to order food.<br/>
             Look for the finest discounts and you'll be lost in <br/>
             a world of delectable food 
          </p>
          <img src={Mobileapp}/>&nbsp;
          <img src={Mobileappstore}/>
         </div>

        </div>
       </div> 
    </section>
  )
}

export default Installation
