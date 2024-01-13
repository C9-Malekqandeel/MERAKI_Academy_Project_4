import React,{useState, useContext} from 'react'
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
import { UserContext } from '../../App';



const Login = () => {

    const {setToken,setUserId}=useContext(UserContext)
    
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
        onClick={()=>{
          axios.post('http://localhost:5000/users/login' , {
          email,
          password,
      }
    ).then((res)=>{
      setToken(res.data.token)
      setStateOfUser(res.data.success)
      localStorage.setItem("token",res.data.token);
      setUserId(res.data.user._id)
      navigate('/users/Dashboard')
    }).catch((err)=>{
      console.log(err);
    })
      }}
      >
        Login
      </Button>

</Modal.Dialog>
</div>
</Form>

  )
}

export default Login