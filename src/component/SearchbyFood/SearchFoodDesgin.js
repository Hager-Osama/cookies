import React from 'react';
import Card from 'react-bootstrap/Card';

const SearchFoodDesgin = ({imageFood,title}) => {
  return (
    <>
     <Card className='search' style={{ width: '13rem' ,border:'none',backgroundColor:'transparent'}}>
      <Card.Img className='imagesFood' src={imageFood} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
     </Card>
    </>
   
  )
}

export default SearchFoodDesgin;
