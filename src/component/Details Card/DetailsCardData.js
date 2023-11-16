
import DetailsCardDesign from './DetailsCardDesign'


const DetailsCardData = () => {
 
    const data=[{
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
  ]
  const card=data.map((d, index)=>(
    <DetailsCardDesign
    key={index}
    detailsImage={d.detailsImage}
    headline={d.headline}
    spanText={d.spanText}
    description={d.description}
    isEvenCard={index%2===0}
    cardNumber={index + 1}
    />
  ))
  return (
  
    <div className='container'>
      
      {card}
      
    </div>
  )
}

export default DetailsCardData
