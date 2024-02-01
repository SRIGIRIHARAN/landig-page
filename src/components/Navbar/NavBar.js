import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <a href="#"><img src={logo} className='logo'></img></a>
          <Nav
            className="options"
            style={{ maxHeight: '100px' }}>
            <Nav.Link href="#" className='navlink'>About</Nav.Link>
            <Nav.Link href="#" className='navlink'>Features</Nav.Link>
            <Nav.Link href="#" className='navlink'>Shop</Nav.Link>
            <Nav.Link href="#" className='navlink'>E-sport</Nav.Link>
          </Nav>
          <form className='input-box'>
            <input type='search' name='search' placeholder='Search games' className='search-input-box' />
            <button className='search-btn'><i class="bi bi-search" /></button>
          </form>
     </Container>
    </Navbar>

  )
}

export default NavBar