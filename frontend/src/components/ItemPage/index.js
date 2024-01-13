import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { ItemContext } from '../Category';


const ItemPage = () => {

    const {itemCategory} = useContext(ItemContext);
    const [items, setItems] = useState([])

    /* useEffect((itemsFromCategory)=>{
        axios.get(`http://localhost:5000/category/${itemsFromCategory}`).then((result)=>{
            setItems(...items,...result.data)

        }).catch((err)=>{
            console.log(err);
        })

    },[])
         */
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    )
}

export default ItemPage