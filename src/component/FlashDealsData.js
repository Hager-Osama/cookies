import React, { useEffect, useState } from 'react'
import FlashDeals from './FlashDealsDesgin'
import axios from 'axios';


const FlashDealsData = () => {
  const [flashDealsData, setFlashDealsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restaurant-project-drab.vercel.app/meal/getallMeal",
        {headers:{
          "Access-Control-Allow-Origin":true
        }},{ crossDomain: true });
        setFlashDealsData(response.data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading){
    return(<p>loading</p>)
  }
  
    const card= flashDealsData.map((d)=>(
        <FlashDeals
        key={d._id}
        imageUrl={d.image.url}
        present={d.offer}
        Title={d.title}
        DaysRemaining={d.expired}
        /> )
        )
   
  return (
    <div className='d-flex flex-wrap justify-content-evenly container mt-5  '>
        {card}
    </div>
  )
}
export default FlashDealsData;