import React, { useEffect, useState } from 'react';
import FeaturedDesign from './FeaturedDesign';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
const FeaturedData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //for post request and dialog
  const [showAddCardDialog, setShowAddCardDialog] = useState(false); // State for dialog
  const [newCardData, setNewCardData] = useState({
    image: null,
    logo: null,
    name: '',
    offer: 0,
    status: '',
    speed: '',
    review: 0,
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restaurant-project-drab.vercel.app/restaurant/getRestaurant");
        setData(response.data.result);
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  /* delet */

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`https://restaurant-project-drab.vercel.app/restaurant/deleteRestaurant/${itemId}`);
      // After successful deletion, update the state to remove the deleted item
      setData(data.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  /*end delete */
  /* POST */
  const handleAddCard = async () => {
    try {
      const response = await axios.post(
        "https://restaurant-project-drab.vercel.app/restaurant/addRestaurant", newCardData);
      // Update the data state after successful submission
      setData([...data, response.data.result]);
      setShowAddCardDialog(false); // Close the dialog
      setNewCardData({
        ...newCardData, // Reset form fields
      });
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };
  const handleDialogClose = () => {
    setShowAddCardDialog(false);
  };

  const handleImageChange = (event) => {
    setNewCardData({ ...newCardData, image: event.target.files[0] });
  };

  const handleLogoChange = (event) => {
    setNewCardData({ ...newCardData, logo: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCardData({ ...newCardData, [name]: value }); // update specific field
  };

  /* End POST */
  if (loading) {
    return (<p>loading.........</p>)
  }

  const card = data.map((d) => (
    <FeaturedDesign
      key={d._id}
      imageUrl={d.image.url}
      present={d.offer}
      iconimage={d.logo.url}
      Title={d.name}
      Rate={d.review}
      opens={d.status}
      onDelete={() => handleDelete(d._id)}
    />
  ))
  return (
    <>
      <h1 className='container text-center' style={{ marginBottom: '70px' }}>Featured Restaurants</h1>
      <div className='d-flex flex-wrap justify-content-evenly container mt-5 '>

        {card}

      </div>
      <div className='container d-flex justify-content-center'>
        <Button style={{ color: 'white', marginBottom: "80px" }} variant="warning">Veiw All <i className="fa-solid fa-chevron-right"></i> </Button>
      </div>


      {/*dialog */}
      <Button onClick={() => setShowAddCardDialog(true)}>ADD NEW CARD</Button>

      <Modal show={showAddCardDialog} onClose={handleDialogClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="offer">
              <Form.Label>Offer (%)</Form.Label>
              <Form.Control type="number" name="offer" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control type="number" name="review" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="logo">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" onChange={handleLogoChange} />
            </Form.Group>

            <Button onClick={handleAddCard}>Submit</Button>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default FeaturedData;
