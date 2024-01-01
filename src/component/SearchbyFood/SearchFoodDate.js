
import React, { useEffect, useState } from 'react'
import SearchFoodDesgin from './SearchFoodDesgin'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Modal, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchFoodDate = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm,setShowForm]=useState(false);
    const [formData,setFormData]=useState({
        name:'',
        foods:'',
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://restaurant-project-drab.vercel.app/food/getallFood")
                setData(response.data.result)
            } catch (error) {
                console.log('errrrrorrrr', error)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [])
     //POST
     const handelPostData =async()=>{
        setShowForm(true)
     };
     const handleCloseForm =()=>{
        setShowForm(false)
     };
     const handleInputChange=(e)=>{
       const {name,value}=e.target;
       setFormData({
        ...formData,
        [name]:value
       });
    };
    const handleFileChange=(e)=>{
        const file=e.target.files[0];
        setFormData({
            ...formData,
            foods:file,
          });
    }
    const handleSubmitForm =async(e)=>{
        e.preventDefault();
        try {
            const formDataUpload= new FormData();
            formDataUpload.append('name',formData.name);
            formDataUpload.append('foods',formData.foods);
            const response=await axios.post("https://restaurant-project-drab.vercel.app/food/searchFood"
            ,formDataUpload) 
            setData([...data,response.data.result]);
            setShowForm(false);
            toast.success("Card created successfully!"); // Show success toast message
        } catch (error) {
          console.log("erorr posting data:",error)  
        }
    }

    if (loading) {
        return (<h3>loading.........</h3>)
    }
    const items = data.map((d) => (
        <SearchFoodDesgin
            key={d._id}
            imageFood={d.image.url}
            title={d.name}
        />
    ))

    return (
        <div style={{ backgroundColor: "#FEFAF1", padding: "82px 0px" }}>
            <div className='container d-flex justify-content-center'>
                <div className='textFood'>
                    <h1 style={{ marginBottom: "80px" }}>Search by Food</h1>
                </div>
            </div>

            <div className='d-flex flex-wrap justify-content-evenly container '>
                {items}

                 {/* Form Modal */}
         <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="foode" accept="image/*" onChange={handleFileChange} required />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
         </Modal>

            </div>
             <Button style={{ marginLeft: "46%" }} variant="success" onClick={handelPostData}> Add card</Button> 
        </div>
    )
}

export default SearchFoodDate;
