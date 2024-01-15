import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBarSignIn from '../NavBarSignIn';
import Alert from 'react-bootstrap/Alert';
import axios from "axios"


const Cart = () => {
  const userId = localStorage.getItem("userId");
  const [order, setOrder] = useState()
  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`http://localhost:5000/orders/user/${userId}`,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res)=>{ 
      console.log(res.data.order);
      setOrder(res.data.order[0])
  }).catch((err)=>{
      console.log(err);
  })
  },[]);

  console.log(order);

  return (
    <>
    <NavBarSignIn/>
    <Alert variant='success'>
          Are you contact the seller to have these items Or yet!
        </Alert>
    <>

    {}

      <Card className="text-center">
      <Card.Header>Order with </Card.Header>
      <Card.Body>
        <Card.Title>elem</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </>



    </>

  )
}

export default Cart