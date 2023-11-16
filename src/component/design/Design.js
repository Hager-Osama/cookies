import React from 'react'
import Icon from '../../images/Icon.png'
import  icon1 from '../../images/icon1.png'
import fast from '../../images/fast.png'
const Design = () => {
  return (
    <section className='Design'>
        <div className='container'>
            <div className='carddiv d-flex flex-wrap justify-content-center'>
                <div  className='design1'>
                   <div style={{width:"30%"}}><img  style={{width:"100%"}} src={Icon}/></div> 
                    <h4 style={{color:'#F17228'}}>Daily <br/>Discounts</h4>    
                </div>
                <div  className='design1' >
                <div style={{width:"30%"}}>   <img  style={{width:"100%"}} src={icon1}/></div>
                    <h4 style={{color:'#F17228'}}>Live <br/>Tracing</h4>    
                </div>
                <div  className='design1 last'>
                <div style={{width:"30%"}}>  <img  style={{width:"100%"}} src={fast}/></div>
                    <h4 style={{color:'#F17228'}}>Quick <br/>Delivery</h4>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Design
