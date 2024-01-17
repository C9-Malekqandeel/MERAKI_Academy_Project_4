import React,{useEffect,useState,useContext,createContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForUpdateItem from '../ModalForUpdateItem';
import UpdateItem from '../UpdateItem';
import './style.css'

export const ItemContext = createContext();
// import { UserContext } from '../../App';
const ItemsForUser = () => {
const {itemsUser,setItemsUser}=useContext(UserContext)
    // const [itemsUser, setItemsUser] = useState([]);
    const {userId,token}=useContext(UserContext);
    const [item, setItem] = useState("");
    const [modalShow, setModalShow] = useState("");
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(userId);
const getData=()=>
{
  axios.get(`http://localhost:5000/items/user/${userId}`, 
  {
    headers: {
      authorization: `Bearer ${token}`,
    }}).then((res)=>{
    console.log(res.data);
      setItemsUser(res.data.item)
  }).catch((err)=>{
      console.log(err);
  })
}
    useEffect(()=>{
       getData()
    },[]);

    const DeleteItem= (id)=>{
      axios.delete(`http://localhost:5000/items/delete/${id}`,{
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        console.log(res);
        // get date or hof 
        getData()
      }).catch((err)=>{
        console.log(err);
      })
    }

    console.log(itemsUser);
    console.log(item,"item");
  return (
    
    <>
    <ItemContext.Provider value={item}>
    {itemsUser.map((elem,i)=>{
        console.log(elem);
        return <>
        
        <Card style={{ width: '18rem' }} className="card shadow" >
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{elem.name} </Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {elem.price} </ListGroup.Item>
        <ListGroup.Item>location: {elem.user.location} </ListGroup.Item>
      </ListGroup>
      <Card.Body>

        {/* <Card.Link onClick={()=>{
          DeleteItem(elem._id)
        }}>Card Link</Card.Link>
 */}
        {/* <Card.Link onChange={()=>{
            setItem(elem.category)
            {<ModalForUpdateItem/>}
            {<UpdateItem/>}
        }}> */}

        <a variant='primary' className='bn3637 bn38' onClick={()=>{
          DeleteItem(elem._id)
          handleShow()
        }}> Delete</a>


            <Button variant="primary" className='bn632-hover bn18' onClick={() => {setModalShow(elem._id)
            }}>
        Update
      </Button>

      <ModalForUpdateItem
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         
        {/* </Card.Link> */}
      </Card.Body>
    </Card>
        </>
    })}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        All the details of this item were removed from SWAP; we hope you got your profit.
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </ItemContext.Provider>
    </>
  )
}

export default ItemsForUser