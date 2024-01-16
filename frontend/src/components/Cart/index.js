import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBarSignIn from '../NavBarSignIn';
import Alert from 'react-bootstrap/Alert';
import axios from "axios"
import Closure from '../Closure';


const Cart = () => {
  const userId = localStorage.getItem("userId");
  const [order, setOrder] = useState([])
  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`http://localhost:5000/orders/user/${userId}`,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res)=>{ 
      console.log(res.data.order);
      setOrder([...order,...res.data.order])
  }).catch((err)=>{
      console.log(err);
  })
  },[]);

  console.log(order);

  const checkout= (id)=>{
    axios.put(`http://localhost:5000/orders/checkout/${id}`,{
           checkout
        }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
  }

  return (
    <>
    <NavBarSignIn/>
    <Alert variant='success'>
          Are you contact the seller to have these items Or yet!
        </Alert>
    <>

    {order.map((elem,i)=>{
      return <>
      <Card className="text-center">
      <Card.Header>Your Order No.{i+1} </Card.Header>
      <Card.Body>
        
        <Card.Title>The item:{elem.item.name} </Card.Title>
        <Card.Text>
        <Card.Img variant="top" src={elem.item.image} />
          <p>Description of Item : {elem.item.description} </p>
          <p>
            Seller's Details : 
            </p><p>
            -Name:{elem.user.userName}
            -Contact:{elem.user.contact}
            -location:{elem.user.location}
          </p>
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          checkout(elem._id)

        }} >Checkout Here!</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

        
      </>
    })}
      
    </>

    <Closure/>

    </>

  )
}

export default Cart