import React,{useEffect,useState,useContext,createContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ModalForUpdateItem from '../ModalForUpdateItem';

export const ItemContext = createContext();

const ItemsForUser = () => {
    const [itemsUser, setItemsUser] = useState([]);
    const {userId}=useContext(UserContext);
    const [item, setItem] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:5000/items/user/${userId}`).then((res)=>{
            setItemsUser([...itemsUser,...res.data.item])
        }).catch((err)=>{
            console.log(err);
        })
    },[]);


    console.log(itemsUser);
  return (
    
    <>
    <ItemContext.Provider value={item}>
    {itemsUser.map((elem,i)=>{
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
        <Card.Link onClick={()=>{
            setItem(elem)
            {<ModalForUpdateItem/>}
        }}>Update Item</Card.Link>
      </Card.Body>
    </Card>
        </>
    })}
    </ItemContext.Provider>
    </>
  )
}

export default ItemsForUser