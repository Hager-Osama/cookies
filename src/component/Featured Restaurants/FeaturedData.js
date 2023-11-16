import React from 'react'
import FeaturedDesign from './FeaturedDesign'
import { Button } from 'react-bootstrap'

const FeaturedData = () => {
    const data=[
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
        ]
        const card =data.map((d)=>(
         <FeaturedDesign
            imageUrl={d.imageUrl}
            present={d.present}
            iconimage={d.iconimage}
            Title={d.Title}
            Rate={d.Rate}
            opens={d.opens}
         />   
        ))
  return (
    <>
    <h1 className='container text-center'style={{marginBottom:'70px'}}>Featured Restaurants</h1>
    <div className='d-flex flex-wrap justify-content-evenly container mt-5 '>
        
    {card}
 
    </div>
    <div className='container d-flex justify-content-center'>
    <Button style={{color:'white',marginBottom:"80px" }} variant="warning">Veiw All <i class="fa-solid fa-chevron-right"></i> </Button>
    </div>
    </>
  )
}

export default FeaturedData
