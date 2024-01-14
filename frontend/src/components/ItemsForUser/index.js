import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemsForUser = () => {
    const [itemsUser, setItemsUser] = useState([]);
    const {userId}=useContext(UserContext);

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
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </>
    })}
    </>
  )
}

export default ItemsForUser