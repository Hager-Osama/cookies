
import { useEffect, useState } from 'react'
import DetailsCardDesign from './DetailsCardDesign'
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';


const DetailsCardData = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  /*post */
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    image:null,
    title: '',
    description: '',
  });


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
  },[])

  /* POST */
  const handlePostData = async () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('image', formData.image);
      formDataUpload.append('title', formData.title);
      formDataUpload.append('description', formData.description);

      const response = await axios.post("https://restaurant-project-drab.vercel.app/bestFood/createBestFood",
       formDataUpload );

      setData([...data, response.data.result]);
      setShowForm(false);;
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

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
     <Button onClick={handlePostData}>add card</Button> 
     
     {/* Form Modal */}
     <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group controlId="formImage">
              <Form.Label>detailsImage</Form.Label>
              <Form.Control type="file" name="image" accept="image/*" onChange={handleFileChange} required />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formData.description} onChange={handleInputChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DetailsCardData;
