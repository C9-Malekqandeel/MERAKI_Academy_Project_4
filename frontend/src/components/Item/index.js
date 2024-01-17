import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useEffect,useState,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import './style.css'


function Item() {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const {setItemId} = useContext(UserContext);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("userId");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    axios.get(`http://localhost:5000/items/random`).then((res)=>{
      console.log(res);
      setItems([...items,...res.data.items])
    }).catch((err)=>{
      console.log(err);
    }
    )
  },[]);

  console.log(items,"Items");

  const addToCart = (data)=>{
    axios.post(`http://localhost:5000/orders/create/${data}`,{
      user,
      item:data,
      checkout:false
    }, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }).then((res)=>{
      console.log(res);

    }).catch((err)=>{
      console.log(err);
    })
  };


  return (
    <>
    <br></br>
    <Container>
      
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>If you click on Save!</Accordion.Header>
        <Accordion.Body>
        The product will be saved in your basket, but it cannot be guaranteed that it will not be purchased from someone else, so it is recommended to contact the seller now and obtain it.
        Notes: Needs to sign in to your account.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Show item</Accordion.Header>
        <Accordion.Body>
        You can view additional details about the product and how to contact the seller, including phone numbers and others, in addition to previous user comments on the seller.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
    </Container>
    <br></br>
    <br>
    </br>

    <Container>
    <Alert  variant="info" >
      New Item was posted HERE!

        </Alert>
        <Alert  variant="info" >
        You can save it later if you are logged in to your account.

        </Alert>
        <Alert  variant="info" >
      Welcome to Swap!

        </Alert>
    </Container>


    <Container className='item'>
    {items.map((elem,i)=>{
      return <>

<Card className="card shadow">
      <Card.Header><h4>New Item</h4> </Card.Header>
      
      <Card.Body>
      <Card.Img src={elem.image} className='card-img' alt="Card image" />
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
        <h4>{elem.description}</h4>
        <h4>{elem.price}</h4>
        </Card.Text>
        <Card.Text>
        <a variant="primary" className='bn13' onClick={()=>{
          setItemId(elem._id);
          localStorage.setItem("itemId",elem._id)
          navigate(`/item/${elem._id}`);
        }}>Show Item</a>

        {isLoggedIn && <a className='bn39' onClick={()=>{
          addToCart(elem._id)
          handleShow()
        }} >Save it later</a> }
        </Card.Text>

        </Card.Body>
    </Card>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Great!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This item was saved on your cart, make sure to contact the seller as soon as possible!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>

    })}
    </Container>
    </>
  );
};

export default Item;