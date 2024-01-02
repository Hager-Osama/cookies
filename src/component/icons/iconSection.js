import React from 'react'

import Card from 'react-bootstrap/Card';
const IconSection = ({Icon,Title, description}) => {
  return (
    <div className='hager'>
    <div className='container' >
    <Card style={{ width: '18rem' , textAlign:'center', border:" none",margin:"60px 0px", backgroundColor:"transparent"}}>
      <Card.Img  style={{width:'112px' ,height:"112px", margin:'auto'}} variant="top" src={Icon} />
      <Card.Body>
        <Card.Title className='fw-bold'>{Title}</Card.Title>
        <Card.Text className='text-secondary'>
         {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default IconSection
