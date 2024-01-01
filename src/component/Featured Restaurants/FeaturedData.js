import React, { useEffect, useState } from 'react';
import FeaturedDesign from './FeaturedDesign';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    speed: 'Fast',
    review: 0,
  });
  //get
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
      toast.success("Card deleted successfully!"); // Show success deleted toast message
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  /*end delete */
  /* POST */
  const handleAddCard = async () => {
    try {
      const formDataBody = new FormData();

      formDataBody.append('name', newCardData.name);
      formDataBody.append('image', newCardData.image);
      formDataBody.append('offer', newCardData.offer);
      formDataBody.append('speed', newCardData.speed);
      formDataBody.append('logo', newCardData.logo);
      formDataBody.append('review', newCardData.review);
      formDataBody.append('status', 'Open Now');

      const response = await axios.post(
        "https://restaurant-project-drab.vercel.app/restaurant/createRestaurant", formDataBody);
      // Update the data state after successful submission
      setData([...data, response.data.result]);
      setShowAddCardDialog(false); // Close the dialog
      toast.success("Card created successfully!"); // Show success toast message
      setNewCardData({
        ...newCardData // Reset form fields
      });
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };
  const handleDialogClose = () => {
    setShowAddCardDialog(false);


    setNewCardData({
      speed: 'Fast',
    });
  };

  const handleImageChange = (event) => {
    setNewCardData({ ...newCardData, image: event.target.files[0] });
  };

  function onSpeedChanged(event) {
    setNewCardData({ ...newCardData, speed: event.target.value });
  }

  const handleLogoChange = (event) => {
    setNewCardData({ ...newCardData, logo: event.target.files[0] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCardData({ ...newCardData, [name]: value }); // update specific field
  };
  /* End POST */

  /* PUT */
  const openEditDialog = (resturant) => {
    setNewCardData({
      id: resturant._id,
      name: resturant.name,
      offer: resturant.offer,
      status: resturant.status,
      speed: resturant.speed,
      review: resturant.review,
      imageUrl: resturant.image.url,
      logoUrl: resturant.logo.url,
    });
    setShowAddCardDialog(true);
  }


  const handleEditCard = async () => {
    const formDataBody = new FormData();

    formDataBody.append('name', newCardData.name);
    formDataBody.append('offer', newCardData.offer);
    formDataBody.append('image', newCardData.image);
    formDataBody.append('speed', newCardData.speed);
    formDataBody.append('logo', newCardData.logo);
    formDataBody.append('review', newCardData.review);
    formDataBody.append('status', 'Open Now');

    try {
      const response = await axios.put(
        `https://restaurant-project-drab.vercel.app/restaurant/updateRestaurant/${newCardData.id}`, formDataBody);
      // Update the data state after successful update
      setData(data.map((item) => {
        if (item._id === response.data.result._id) {
          return response.data.result
        }
        return item;
      }));
      setShowAddCardDialog(false); // Close the dialog
      toast.success("Card updated successfully!"); // Show update toast message
    } catch (error) {
      console.error('Error editing card:', error);
    }
  };
  /* End PUT */
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
      onEdit={() => openEditDialog(d)} />
  ))
  return (
    <>
      <h1 className='container text-center' style={{ marginBottom: '70px' }}>Featured Restaurants</h1>
      <div className='d-flex flex-wrap justify-content-evenly container mt-5 '>
        {card}
      </div>

      <div className='container d-flex justify-content-center'>
        <Button style={{ color: 'white', marginBottom: "30px" }} variant="warning">Veiw All <i className="fa-solid fa-chevron-right"></i> </Button>
      </div>

      {/* Post Modal */}
      <Button style={{ marginLeft: "46%" }} onClick={() => setShowAddCardDialog(true)}>ADD NEW CARD</Button>
      <Modal show={showAddCardDialog} onHide={handleDialogClose}>
        <Modal.Header closeButton >
          <Modal.Title>Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => {
            event.preventDefault();
            if (newCardData.id === undefined) {
              handleAddCard();
            } else {
              handleEditCard();
            }
          }}>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <br />
              {
                newCardData.imageUrl === undefined ?
                null:
                <img src={newCardData.imageUrl} style={{ width: '100px', height: '100px' }} />
              }
              <Form.Control type="file" onChange={handleImageChange} required={newCardData.id === undefined} />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="name" onChange={handleInputChange} required value={newCardData.name} />
            </Form.Group>
            <Form.Group controlId="offer">
              <Form.Label>Offer (%)</Form.Label>
              <Form.Control type="number" name="offer" onChange={handleInputChange} required value={newCardData.offer} />
            </Form.Group>
            {/* <Form.Group controlId="speed">
              <Form.Label>Speed</Form.Label>
              <Form.Select as="select" name="speed" onChange={onSpeedChanged} required value={newCardData.speed}>
                <option value="Fast">Fast</option>
                <option value="Slow">Slow</option>
              </Form.Select>
            </Form.Group> */}
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control type="number" name="review" onChange={handleInputChange} required value={newCardData.review} />
            </Form.Group>
            <Form.Group controlId="logo">
              <Form.Label>Logo</Form.Label>
              <br />
              {newCardData.logoUrl === undefined ? null : <img src={newCardData.logoUrl} style={{ width: '100px', height: '100px' }} />}
              <Form.Control type="file" onChange={handleLogoChange} required={newCardData.id === undefined} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default FeaturedData;
