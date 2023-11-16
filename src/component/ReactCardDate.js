import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCardDesgin from './ReactCardDesgin.js';
import { Container } from 'react-bootstrap';
const ReactCardDate = () => { 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items:5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const data=[
    {image :require('../images/Frame40.png'),
     title:`Cheese Burger`,
     location:`Burger Arena`,
     price:`$3.88`,
    },
    {
     image:require(`../images/Frame401.png`),
     title:`Toffe’s Cake`,
     location:`Top Sticks`,
     price:`$4.00`,
    },
    {image:require(`../images/Rectangle.png`),
    title:`Dancake`,
    location:`Cake World`,
    price:`$1.99`,
    },
    {image:require(`../images/Frame402.png`),
    title:`Crispy Sandwitch`,
    location:`Fastfood Dine`,
    price:`$3.00`,
    },
    {image:require(`../images/Frame403.png`),
    title:`Thai  Soup`,
    location:`Foody man`,
    price:`$2.79`,
    },
  ]
  const card= data.map((d)=>(
  <ReactCardDesgin
  image={d.image}
  title={d.title}
  location={d.location}
  price={d.price}
  /> )
  )
  return (
    
   <Container> 
      <Carousel responsive={responsive}> 
        {card}
      </Carousel>
   </Container>    
     
  )
}

export default ReactCardDate
