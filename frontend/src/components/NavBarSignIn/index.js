import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgLogo from '../images/Swap-logos_black.png'
import './style.css'
import { UserContext } from '../../App';

const NavBarSignIn = () => {
  const {setToken, setIsLoggedIn} = useContext(UserContext);

  const logout = ()=>{
    setToken(null);
    setIsLoggedIn(false);
    localStorage.clear();
}
  return (
    <>
      
        <Navbar className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/Home">
            <img src={imgLogo} className="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/orders">Orders</Nav.Link>
                  <Nav.Link href="/users/login" onClick={()=>{
                    logout()
                  }} >Sign Out</Nav.Link>
                  <NavDropdown
                    title="Items"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="/Home">Another Items</NavDropdown.Item>
                    <NavDropdown.Item href="/users/Dashboard">
                      Your items
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/users/Dashboard">
                      Control Your Posts
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>

    )
}

export default NavBarSignIn