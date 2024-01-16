import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useEffect,useState,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
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
    <Container>
      <Row>
    {items.map((elem,i)=>{
      return <>

<Card className="card shadow">
      <Card.Header>New Item</Card.Header>
      
      <Card.Body>
      <Card.Img src={elem.image} alt="Card image" />
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
        <h4>{elem.description}</h4>
        <h4>{elem.price}</h4>
        </Card.Text>
        <Card.Text>
        <a variant="primary" className='bn13' onClick={()=>{
          setItemId(elem._id);
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
    </Row>
    </Container>
    </>
  );
};

export default Item;