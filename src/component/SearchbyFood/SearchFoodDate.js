
import React, { useEffect, useState } from 'react'
import SearchFoodDesgin from './SearchFoodDesgin'
import axios from 'axios';



// Food model
class Food {
    constructor(image, _id, name, createdAt, updatedAt, __v) {
        this.image = image;
        this._id = _id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.__v = __v;
    }
}
  
  // API Response model
  class GetFoodModel {
    constructor(success, result) {
        this.success = success;
        this.result = result.map(
            ({ image, _id, name, createdAt, updatedAt, __v }) => new Food(image, _id, name, createdAt, updatedAt, __v)
        );
    }
}
  




const SearchFoodDate = () => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
         try {
            const response =await axios.get("https://restaurant-project-drab.vercel.app/food/getallFood" 
            // ,{  
            // headers:{

            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type': 'application/json',             
            //   }
            
            // }
            )

            console.log(`hellooo ${response.data.result}` )
            setData(response.data.result)
         } catch (error) {
            console.log('errrrrorrrr', error)

         }finally{
            setLoading(false) 
         }
        };
        fetchData();    
    },[])
    if(loading){
        return(<h3>loading.........</h3>)
    }

   /* const data=[
        {
            imageFood:require("../../images/Pizza.png"),
            title:`Pizza`
        },
        {
            imageFood:require("../../images/Burger.png"),
            title:`Burger`
        },
        {
            imageFood:require("../../images/Noodles.png"),
            title:`Noodles`
        },
        {
            imageFood:require("../../images/Subsandiwch.png"),
            title:`Sub-sandiwch`
        },
        {
            imageFood:require("../../images/Chowmein.png"),
            title:`Chowmein`
        },
        {
            imageFood:require("../../images/Steak.png"),
            title:`Steak`
        },

    ]*/

    const items=data.map((d)=>(
    <SearchFoodDesgin
    key={d.id}
    imageFood={d.image.url}
    title = {d.name}
    />
    ))

  return (
    <div div style={{backgroundColor:"#FEFAF1" ,padding:"82px 0px"}}>
    <div className='container d-flex justify-content-between'>
    <div className='textFood'>
    <h1 style={{marginBottom:"80px"}}>Search by Food</h1>
    </div>
    <div className='iconsarrow'>
        <span>View All <i className="fa-solid fa-chevron-right"></i></span>
        <span><i className="fa-solid fa-chevron-left"></i></span>
        <span> <i className="fa-solid fa-chevron-right"></i> </span>
    </div>
    </div>

    <div className='container d-flex justify-content-center '>
      {items}
    </div>
    </div>
  )
  }

export default SearchFoodDate;
