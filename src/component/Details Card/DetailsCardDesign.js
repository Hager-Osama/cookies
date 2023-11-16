import React from 'react'
import Button from 'react-bootstrap/Button';

const DetailsCardDesign = ({ detailsImage, headline, spanText, description, isEvenCard, }) => {
    const detailsDev = <div className='Detailstext'>
        <h2> {headline}<span> {spanText}</span> </h2>
        <p>{description}</p>
        <Button variant="warning" style={{
            width: "100%", color: "white",
            boxShadow: '0px 20px 40px 0px rgba(250, 99, 35, 0.24), 0px 5px 10px 0px rgba(253, 114, 92, 0.22)'
        }}>
            Proceed to order <i class="fa-solid fa-chevron-right"></i></Button>
    </div>

    const imgDev = <div className='DetailsImage'>
        <img src={detailsImage} />
    </div>

    return (
        <section className='Details'>
            <div className={`d-flex cardEdit ${isEvenCard ? 'reverseOrder' : ''}`}>
               {isEvenCard ?
                detailsDev
                : imgDev
              }{
                isEvenCard ?
                imgDev
                : detailsDev} 
            </div>
        </section >
    )
}

export default DetailsCardDesign