import React from 'react'
import IconSection from '../component/iconSection'
const IconSectionData = () => {
    const data=[
        {Icon :require('../images/Icons.png'),
        Title:` Select location`,
        description:`Choose the location where your food will be delivered.`,
        },
        {Icon :require('../images/Icons2.png'),
        Title:`Choose order`,
        description:`Check over hundreds of menus to pick your favorite food`,
        },
        {Icon :require('../images/Icons3.png'),
        Title:` Pay advanced`,
        description:`Its quick safe, and simple. Select several methods of payment.`,
        },
        {Icon :require('../images/Icons4.png'),
        Title:`Enjoy meals`,
        description:`Food is made and delivered directly to your home.`,
        },
        ]

        const card= data.map((d,index)=>(
          <IconSection
          key={index}
          Icon={d.Icon}
          Title={d.Title}
          description={d.description}
          /> )
          )
  return (
    <>
    <div className='allSection'>
    <h1 className='text-center text-edit'>How does it work</h1>
    <div className='d-flex justify-content-evenly container flex-wrap'>
      {card}
    </div>
    </div>
   </>
  )
}

export default IconSectionData
