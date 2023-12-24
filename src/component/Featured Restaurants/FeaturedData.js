import React, { useEffect, useState } from 'react';
import FeaturedDesign from './FeaturedDesign';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const FeaturedData = () => {
  const [data, setData]= useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    const fetchData= async ()=>{
     try {
      const response=await axios.get("https://restaurant-project-drab.vercel.app/restaurant/getRestaurant");
      setData(response.data.result);
     } catch (error) {
      console.log('Error fetching data:', error);
     } finally{
      setLoading(false);
     }
    };
    fetchData();
  },[]);
  if(loading){
    return(<p>loading.........</p>)
  }
    /*const data=[
        {imageUrl :require('../../images/1.png'),
        present:`20`,
        iconimage:require('../../images/Foodworld.png'),
        Title:`Foodworld`,
        Rate:`80`,
        opens:`Opens tomorrow`
        },
        {imageUrl :require('../../images/2.png'),
        present:`10`,
        iconimage:require('../../images/Pizzahub.png'),
        Title:`Pizzahub`,
        Rate:`76`,
        opens:`Opens tomorrow`
        },
        {imageUrl :require('../../images/3.png'),
        present:`15`,
        iconimage:require('../../images/Donutshut.png'),
        Title:`Donuts hut`,
        Rate:`60`,
        opens:`Open Now`
        },
        {imageUrl :require('../../images/4.png'),
        present:`50`,
        iconimage:require('../../images/Rest.png'),
        Title:`Donuts hut`,
        Rate:`23`,
        opens:`Open Now`
        },
        {imageUrl :require('../../images/5.png'),
        present:`25`,
        iconimage:require('../../images/RedSquare.png'),
        Title:`Red Square`,
        Rate:`40`,
        opens:`Open Now`
        },
        {imageUrl :require('../../images/6.png'),
        present:`13`,
        iconimage:require('../../images/RestaruantLogo(6).png'),
        Title:`Ruby Tuesday`,
        Rate:`46`,
        opens:`Open Now`
        },
        {imageUrl :require('../../images/7.png'),
        present:`30`,
        iconimage:require('../../images/RestaruantLogo(7).png'),
        Title:`Kuakata Fried Chicken`,
        Rate:`0`,
        opens:`Open Now`
        },
        {imageUrl :require('../../images/8.png'),
        present:`28`,
        iconimage:require('../../images/TacoBell.png'),
        Title:`Taco Bell`,
        Rate:`50`,
        opens:`Open Now`
        },
        ]*/
        const card =data.map((d)=>(
         <FeaturedDesign
            key={d._id}
            imageUrl={d.image.url}
            present={d.offer}
            iconimage={d.logo.url}
            Title={d.name}
            Rate={d.review}
            opens={d.status}
         />   
        ))
  return (
    <>
    <h1 className='container text-center'style={{marginBottom:'70px'}}>Featured Restaurants</h1>
    <div className='d-flex flex-wrap justify-content-evenly container mt-5 '>
        
    {card}
 
    </div>
    <div className='container d-flex justify-content-center'>
    <Button style={{color:'white',marginBottom:"80px" }} variant="warning">Veiw All <i className="fa-solid fa-chevron-right"></i> </Button>
    </div>
    </>
  )
}

export default FeaturedData;
