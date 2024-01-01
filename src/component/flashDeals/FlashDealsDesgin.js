import React from 'react';
import Card from 'react-bootstrap/Card';
const FlashDeals = ({imageUrl,present,Title,DaysRemaining}) => {
  return (
    
    <Card style={{  border:'none'}} >   
      <Card.Img className='image-size' variant="top" src={imageUrl}  />
      <div className='present-card' >
        <span>{present}<sup>%</sup><sub>off</sub></span>
      </div>
      <Card.Body>
        <Card.Title  style={{marginBottom:"20px"}}>{Title}</Card.Title>
        <span className='text'>{DaysRemaining} </span>
      </Card.Body>
    </Card>
    
  )
}

export default FlashDeals;
