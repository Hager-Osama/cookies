import React from 'react'
import{Container , Nav}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import MaskGroup from '../images/MaskGroup.png';
import icon1 from '../images/icon1.png';

const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
          <Navbar.Brand href="#home" className='logo'style={{color:'#F17228'}}>
                  <img src={MaskGroup} alt="sfvs"  /> 
                  food<span style={{color:'#FFB30E', marginRight:"100px"}} >waGon</span>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Navbar.Collapse className="basic-navbar-nav justify-content-center ">
              <b>Deliver to:</b> 
              <img src={icon1} style={{height:'19px'}}/> 
              Current Location
              <b>Mohammadpur Bus Stand, Dhaka</b>
          </Navbar.Collapse> 

          <Navbar.Collapse className="basic-navbar-nav justify-content-end mt-3 "> 
          <Nav  className="edit"> 
           <span style={{color:'#FFB30E'}}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></span> &nbsp;
            <b>Search Food</b> 
            <button className='btn'><i className="fa-solid fa-user"></i> Login</button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar
