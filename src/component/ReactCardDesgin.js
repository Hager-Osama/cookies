import React from 'react'
import Button from 'react-bootstrap/Button';
const ReactCardDesgin = ({image,title,price,location}) => {
  return (
    <div className='card2' >
    <div > 
       <img src={image} style={{width:"100%"}}/> 
    </div>
    <div>
      <br/>
     <h5>{title}</h5>
     <h6 style={{color:"#FFB30E"}}><i className="fa-solid fa-location-dot"></i>{location}</h6>
     <h6>{price}</h6>
     <Button variant="warning" style={{width:"100%", color:"white",
      boxShadow: '0px 20px 40px 0px rgba(250, 99, 35, 0.24), 0px 5px 10px 0px rgba(253, 114, 92, 0.22)'}}>Order Now</Button>
    </div>
  </div>
  )
}
export default ReactCardDesgin;

