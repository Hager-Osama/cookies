import React from 'react'
import FlashDeals from './FlashDealsDesgin'


const FlashDealsData = () => {
    const data=[
        {imageUrl :require('../images/im.png'),
        present:` 15`,
        Title:`Greys Vage`,
        DaysRemaining:`10 Days Remaining`,
        },
        {imageUrl :require('../images/ha.png'),
        present:` 13`,
        Title:`Greys Vage`,
        DaysRemaining:`8 Days Remaining`,
        },
        {imageUrl :require('../images/im.png'),
        present:` 20`,
        Title:`Greys Vage`,
        DaysRemaining:`5 Days Remaining`,
        },
        {imageUrl :require('../images/Image4.png'),
        present:` 25`,
        Title:`Greys Vage`,
        DaysRemaining:`2 Days Remaining`,
        },
        ]
    const card= data.map((d)=>(
        <FlashDeals
        imageUrl={d.imageUrl}
        present={d.present}
        Title={d.Title}
        DaysRemaining={d.DaysRemaining}
        /> )
        )
   
  return (
    <div className='d-flex flex-wrap justify-content-evenly container mt-5  '>
        {card}
    </div>
  )
}

export default FlashDealsData
