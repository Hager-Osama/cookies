import React, { useEffect, useState } from 'react'
import FlashDeals from './FlashDealsDesgin'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Modal, Form} from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const FlashDealsData = () => {
  const [flashDealsData, setFlashDealsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm,setShowForm]=useState(false)
  const [formData,setFormData]=useState({
    title:'',
    meal:null,
    offer:'',
    expired:'',
  })
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
  //POST
   const handelPostData =async()=>{
    setShowForm(true)
   };
   const handleCloseForm =()=>{
    setShowForm(false)
   };
   const handleInputChange =(e)=>{
    const {name ,value}=e.target;
    setFormData({...formData, [name]:value});
   };
   const handleFileChange=(e)=>{
    const file=e.target.files[0];
    setFormData({
      ...formData,
      meal:file,
    });
   };
   const handleSubmitForm =async(e)=>{
    e.preventDefault();
    try {
      const formDataUpload=new FormData();
      formDataUpload.append("title",formData.title);
      formDataUpload.append("meal",formData.meal);
      formDataUpload.append("offer",formData.offer);
      formDataUpload.append("expired",formData.expired);
      const response= await axios.post("https://restaurant-project-drab.vercel.app/meal/createMeal",
      formDataUpload)
      setFlashDealsData([...flashDealsData,response.data.result]);
      setShowForm(false);
      toast.success("Card created successfully!"); // Show success toast message

    } catch (error) {
      console.log("erorr posting data:",error)
    }
   }


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
    <>
    <div className='d-flex flex-wrap justify-content-evenly container mt-5  '>
        {card}
    </div>
    <Button style={{ marginLeft: "46%" }} onClick={handelPostData}>Add card</Button>
    {/* Form Modal */}
     <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="meal" accept="image/*" onChange={handleFileChange} required />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formOffer">
              <Form.Label>Offer</Form.Label>
              <Form.Control type="text" name="offer" value={formData.offer} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formExpired">
              <Form.Label>Expired</Form.Label>
              <Form.Control type="text" name="expired" value={formData.expired} onChange={handleInputChange} required />
            </Form.Group>
            <Button type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
         </Modal>
    </>
  )
}
export default FlashDealsData;