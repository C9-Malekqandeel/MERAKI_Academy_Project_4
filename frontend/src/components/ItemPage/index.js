import React,{useContext,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import NavBarSignIn from '../NavBarSignIn';
import HeadBarHome from '../HeadBarHome';
import Closure from '../Closure';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import Accordion from 'react-bootstrap/Accordion';








const ItemPage = () => {

    const {id} = useParams();
    console.log(id ,"id");
    const isLoggedIn=localStorage.getItem("isLoggedIn")
    const {categoryId} = useContext(UserContext);
    const [items, setItems] = useState([]);
    const {setItemId} = useContext(UserContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userId");



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        axios.get(`http://localhost:5000/category/${id}`).then((result)=>{
          console.log("Data",result.data.ItemOfCategory
          );
            setItems(result.data.ItemOfCategory
              )
           

        }).catch((err)=>{
            console.log(err);
        })

    },[])

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
        
    //console.log(items, ">>items");
  return (
    <>

    {isLoggedIn? <NavBarSignIn/> : <HeadBarHome/>}
    <Container>
<br></br>
<br></br>

    <Breadcrumb>
      <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>
        Category
      </Breadcrumb.Item>
    </Breadcrumb>

    </Container>
    <br></br>

    

    <Container className='item'>
    {items.length >0 ? items.map((item,i)=>{
        return <> <Card className="card shadow">
        <Card.Header>New Item</Card.Header>
        
        <Card.Body>
        <Card.Img src={item.image} alt="Card image" />
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          <h4>{item.description}</h4>
          <h4>{item.price}</h4>
          </Card.Text>
          <Card.Text>
          <a variant="primary" className='bn13' onClick={()=>{
            setItemId(item._id);
            navigate(`/item/${item._id}`);
          }}>Show Item</a>
  
          {isLoggedIn && <a className='bn39' onClick={()=>{
            addToCart(item._id)
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
  
    }):
    
    <Alert variant="warning">
    There are no items here; start from your side!
    <Alert.Link href="http://localhost:3000/users/register">Create your account</Alert.Link>
            </Alert>
    }

</Container>
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
    
    <Closure/>
    </>


    )
}

export default ItemPage