import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { CategoryContext } from '../Category';


const ItemPage = () => {

    const {itemsFromCategory} = useContext(CategoryContext);

    const dataItems = (itemsFromCategory)=>{
        axios.get(`http://localhost:5000/category/${itemsFromCategory}`).then()
    }
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