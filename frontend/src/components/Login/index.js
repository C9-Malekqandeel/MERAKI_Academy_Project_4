import React,{useState, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import HeadBarHome from "../HeadBarHome";
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';


export const UserContext = createContext();

const Login = () => {
    const [token, setToken] = useState(""||localStorage.getItem("token"));

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [validated, setValidated] = useState(false);
    const [StateOfUser, setStateOfUser] = useState(" ")
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };


  return (
    <UserContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn}}>


        <Form noValidate validated={validated} onSubmit={handleSubmit}>

<HeadBarHome/>

<Nav justify variant="tabs" defaultActiveKey="/home">
<Nav.Item>
<Nav.Link href="/users/register">Register</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/users/login">Login</Nav.Link>
</Nav.Item>
</Nav>
//! new modals

<div
className="modal show"
style={{ display: 'block', position: 'initial' }}
>
<Modal.Dialog>



<Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email Here!"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password Here!"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button
        type="submit"
        
      >
        Login
      </Button>

</Modal.Dialog>
</div>
</Form>


    </UserContext.Provider>
  )
}

export default Login