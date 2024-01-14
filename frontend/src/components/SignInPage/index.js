import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios'

const signInPage = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
  return (
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" onChange={(e) => {
                setEmail(e.target.value);
              }}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
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
        <Button type="submit" onClick={()=>{
          axios.post('http://localhost:5000/users/login' , {
          email,
          password
      }
    ).then((res)=>{
      localStorage.setItem("token",res.data.token);
      moveToDashboard(res.data)
      
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

export default signInPage