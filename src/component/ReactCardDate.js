import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCardDesgin from './ReactCardDesgin.js';
import { Container } from 'react-bootstrap';

const ReactCardDate = () => { 

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restaurant-project-drab.vercel.app/PopularItems/getallPopularItems');
        setApiData(response.data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts
  if (loading){
    return(<h2>loading.........</h2>)
  }
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
 /*const data=[
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
  ]*/
 
  const card= apiData.map((item)=>(
  <ReactCardDesgin
  key={item._id}
  image={item.image.url}
  title={item.title}
  location={item.place}
  price={`$${item.price.toFixed(2)}`} 
  // is used to format the price value as a string with two decimal places and prepended with a dollar sign ('$').
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

export default ReactCardDate;
