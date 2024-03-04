import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignInPage = () => {
    
    const [emailTest, setEmailTest] = useState("");
    const [passwordTest, setPasswordTest] = useState("");
    const navigate = useNavigate()

    
  return (
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" onChange={(e) => {
                setEmailTest(e.target.value);
              }}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {
                setPasswordTest(e.target.value);
              }}/>
      </Col>
    </Form.Group>
    <fieldset>
      <Form.Group as={Row} className="mb-3">
        <Form.Label as="legend" column sm={2}>
          Radios
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="first radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="second radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            type="radio"
            label="third radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
        </Col>
      </Form.Group>
    </fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
      <Col sm={{ span: 10, offset: 2 }}>
        <Form.Check label="Remember me" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button onClick={()=>{
          axios.post('https://swap-fmy1.onrender.com/users/login' , {
          email: emailTest,
          password: passwordTest
      }
    ).then((res)=>{
      localStorage.setItem("token",res.data.token);

      navigate('/users/Dashboard')
    }).catch((err)=>{
      console.log(err);
    })
      }}
      >Sign in</Button>
      </Col>
    </Form.Group>
  </Form>

    )
}

export default SignInPage