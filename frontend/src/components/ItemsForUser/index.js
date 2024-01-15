import React,{useEffect,useState,useContext,createContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ModalForUpdateItem from '../ModalForUpdateItem';
import UpdateItem from '../UpdateItem';

export const ItemContext = createContext();

const ItemsForUser = () => {
    const [itemsUser, setItemsUser] = useState([]);
    const {userId,token}=useContext(UserContext);
    const [item, setItem] = useState("");
    const [modalShow, setModalShow] = useState(false);

    console.log(userId);

    useEffect(()=>{
        axios.get(`http://localhost:5000/items/user/${userId}`, 
        {
          headers: {
            authorization: `Bearer ${token}`,
          }}).then((res)=>{
          console.log(res.data);
            setItemsUser([...itemsUser,...res.data.item])
        }).catch((err)=>{
            console.log(err);
        })
    },[]);


    console.log(itemsUser);
    console.log(item,"item");
  return (
    
    <>
    <ItemContext.Provider value={item}>
    {itemsUser.map((elem,i)=>{
        console.log(elem);
        return <>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{elem.name} </Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {elem.price} </ListGroup.Item>
        <ListGroup.Item>category: {elem.category} </ListGroup.Item>
      </ListGroup>
      <Card.Body>

        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link onChange={()=>{
            setItem(elem.category)
            {<ModalForUpdateItem/>}
            {<UpdateItem/>}
        }}>
            <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalForUpdateItem
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         
        </Card.Link>
      </Card.Body>
    </Card>
        </>
    })}
    </ItemContext.Provider>
    </>
  )
}

export default ItemsForUser