import React,{useState, useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
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
/* const {id} = useParams(); */



    const {setToken,setUserId,setIsLoggedIn}=useContext(UserContext)
    
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


     const moveToDashboard = (data)=>{
      console.log(data.user._id,"Data");


              setToken(data.token)
              setStateOfUser(data.success)
              setUserId(data.user._id)
              localStorage.setItem("userId",data.user._id)
              navigate(`/users/Dashboard`)
          
              
     } 

/* 
onClick={()=>{
          axios.post('http://localhost:5000/users/login' , {
          email,
          password,
      }
    ).then((res)=>{
      localStorage.setItem("token",res.data.token);
      moveToDashboard(res.data)
      
    }).catch((err)=>{
      console.log(err);
    })
      }}*/
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
        <Form.Group as={Col} md="6" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              //! New Adding
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
              //! New Adding
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please choose right password.
            </Form.Control.Feedback>
          </InputGroup>
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
       
       
        
        onClick={()=>{
          axios.post('http://localhost:5000/users/login' , {
          email,
          password
      }
    ).then((res)=>{
      localStorage.setItem("token",res.data.token);
      setIsLoggedIn(true)
      moveToDashboard(res.data)
      
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