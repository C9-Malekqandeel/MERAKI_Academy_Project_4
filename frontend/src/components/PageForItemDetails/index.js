import React, { useEffect,useState,useContext } from 'react'
import HeadBarHome from '../HeadBarHome'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../App';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




const PageForItemDetails = () => {
    const {id} = useParams() || localStorage.getItem("itemId");
    
    const [item, setItem] = useState([])
    const {token}=useContext(UserContext);
    const userId = localStorage.getItem("userId")

    const [show, setShow] = useState(true);
    const [comment, setComment] = useState("")

    //! will be used context from App itemId

    useEffect(()=>{
        axios.get(`http://localhost:5000/items/item/${id}`).then((result)=>{
            console.log("data",result.data.item);
            setItem([...item,...result.data.item])
        }).catch((err)=>{
            console.log(err);
    })
    },[]);

    const createComment= (data)=>{
        axios.post(`http://localhost:5000/items/comments/add/${data}`,{
            comment:comment,
            user:userId,
        },
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }).then((res)=>{
            console.log("true", res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    console.log("token",token);
    console.log("userId",userId);
    console.log("comment",comment);
    console.log(id);
    console.log(item[0]);

  return (
    <>
    <HeadBarHome/>
    
    {item.map((elem,i)=>{
        return<>
        <Container>
      <Row>
        <Col>
        <h2>
        <Badge bg="secondary">{elem.name} </Badge>
      </h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <Image src={elem.image} fluid />;
        </Col>
        <Col>
        <Alert  variant='primary'>
           Price: {elem.price}
        </Alert>
        <Alert variant="success">
      <Alert.Heading>{elem.name}</Alert.Heading>
      <p>
        {elem.description}
      </p>
      <hr />
      <p className="mb-0">
        Keep it in your Cart if you wish!
      </p>
    </Alert>

    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Contact</Alert.Heading>
        <p>
          Name :{elem.user.userName}
        </p>
        <p>
        Contact:{elem.user.contact}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Do You Need it!</Button>}
    </>

        <Alert  variant='info'>
           Description:
           {elem.description}
        </Alert>
        
      
        </Col>
      </Row>


      <Row>
        <Col>
        <h3>
        Comments <Badge bg="secondary">let leave Your Feedback Here!</Badge>
      </h3>
        {/* {elem.comments.map((elem,i)=>{
            return <>
            <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Comments </Card.Header>
        <Card.Body>
          <Card.Title>Comment : {i+1}</Card.Title>
          <Card.Text>
            {elem}
          </Card.Text>
        </Card.Body>
      </Card>
            </>
        })} */}

        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>{
            setComment(e.target.value)
          }}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={()=>{
            createComment(elem._id)
        }}>
          ADD
        </Button>
      </InputGroup>
        </Col>
      </Row>
    </Container>
        
      </> 
    })}
     
    </>
    )
}

export default PageForItemDetails