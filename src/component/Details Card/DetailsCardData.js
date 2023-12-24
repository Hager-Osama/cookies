
import { useEffect, useState } from 'react'
import DetailsCardDesign from './DetailsCardDesign'
import axios from 'axios';


const DetailsCardData = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const response= await axios.get("https://restaurant-project-drab.vercel.app/bestFood/getBestFood")
      setData(response.data.result)
    } catch (error) {
      console.log('Error fetching data:', error)
    }finally{
      setLoading(false) 
   }
  };
  fetchData();
  })
  if(loading){
    return(<h3>loading.........</h3>)
  }
  
    /*const data=[{
      detailsImage:require('../../images/ImageDetails1.png'),
      headline:`Best deals`,
      spanText:`Crispy Sandwiches`,
      description:`Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.`,
    },
    {
      detailsImage:require('../../images/ImageDetails2.png'),
      headline:`Celebrate  parties with `,
      spanText:`Fried Chicken`,
      description:`Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out 
      best deals for fried chicken.`,
    },
    {
      detailsImage:require('../../images/ImageDetails3.png'),
      headline:`Wanna eat hot & spicy `,
      spanText:` Pizza?`,
      description:`Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.`,
    },
  ]*/
  const cards=data.map((d, index)=>(
    <DetailsCardDesign
    key={d._id}
    detailsImage={d.image.url}
    headline={d.title}
    spanText={d.spanText}
    description={d.description}
    isEvenCard={index%2===0}
    cardNumber={index + 1}
    />
  ))
  return (
  
    <div className='container'>
      
      {cards}
      
    </div>
  )
}

export default DetailsCardData;
