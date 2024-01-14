import React,{useContext,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { UserContext } from '../../App';



const ItemPage = () => {

   
    const {categoryId} = useContext(UserContext);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/category/${categoryId}`).then((result)=>{
            setItems(...items,...result.data.items)

        }).catch((err)=>{
            console.log(err);
        })

    },[])
        
    console.log(items, ">>items");
  return (
    <>

    {items.map((item,i)=>{
        return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary">Showing Item</Button>
        </Card.Body>
      </Card>
  
    })}
    
    </>


    )
}

export default ItemPage