
import React from 'react'
import { Button } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const FeaturedDesign = ({imageUrl,present,iconimage,Title,Rate,opens,onDelete}) => {
   // if (opens !== "Open Now") {   return null; }
  return (
    <>
    
    <Card style={{ width: '18rem' , border:'none' , marginBottom:'60px'}} >   
    <Card.Img variant="top" src={imageUrl} style={{ borderRadius:'15px'}}  />
    <div className='present1' >
        <span><b> <i className="fa-solid fa-tag"></i>{present}% off</b></span>
    </div>
    <div className='present2' >
        <span><b> <i className="fa-solid fa-clock"></i> Fast</b></span>
    </div>
    <Card.Body>
      <Card.Title className='d-flex' style={{marginBottom:"20px"}}>
      <Card.Img src={iconimage} alt="icon" style={{ width: '55px', height: '55px' }} />&nbsp;
        <div>
           <h6>{Title}</h6> 
           <h6 style={{color:"#FFB30E"}}> <i className="fa-solid fa-star"></i> {Rate}</h6>
        </div>
        
        </Card.Title>
      <span className='text open-now '>{opens}</span>
      <Button onClick={onDelete}>Delete</Button>
    </Card.Body>
  </Card>
  </>
  )
}

export default FeaturedDesign
