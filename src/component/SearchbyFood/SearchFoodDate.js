
import React, { useEffect, useState } from 'react'
import SearchFoodDesgin from './SearchFoodDesgin'
import axios from 'axios';
const SearchFoodDate = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restaurant-project-drab.vercel.app/food/getallFood"
                    // ,{  
                    // headers:{

                    //     'Access-Control-Allow-Origin': '*',
                    //     'Content-Type': 'application/json',             
                    //  }}  
                )
                setData(response.data.result)
            } catch (error) {
                console.log('errrrrorrrr', error)

            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [])
    if (loading) {
        return (<h3>loading.........</h3>)
    }


    const items = data.map((d) => (
        <SearchFoodDesgin
            imageFood={d.image.url}
            title={d.name}
        />
    ))

    return (
        <div key={'asdasdasd'} style={{ backgroundColor: "#FEFAF1", padding: "82px 0px" }}>
            <div className='container d-flex justify-content-between'>
                <div className='textFood'>
                    <h1 style={{ marginBottom: "80px" }}>Search by Food</h1>
                </div>
                <div className='iconsarrow'>
                    <span key={'icon1'}>View All <i className="fa-solid fa-chevron-right"></i></span>
                    <span key={'icon2'}><i className="fa-solid fa-chevron-left"></i></span>
                    <span key={'icon3'}> <i className="fa-solid fa-chevron-right"></i> </span>
                </div>
            </div>

            <div className='container d-flex justify-content-center '>
                {items}
            </div>
        </div>
    )
}

export default SearchFoodDate;
