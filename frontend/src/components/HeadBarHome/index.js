import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgLogo from '../images/Swap-logos_black.png'
import './style.css'


function HeadBarHome() {
    //const {isLoggedIn} = useContext(UserContext)
  return (
    <Navbar collapseOnSelect expand="lg" className="bar">
      <Container>
        <Navbar.Brand href="/home">
            <img src={imgLogo} className="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Details">How it works</Nav.Link>
            <NavDropdown title="User" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/users/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/users/login">
                login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Details">
                How can you benefit!
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadBarHome;