import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBarSignIn from '../NavBarSignIn';
import Alert from 'react-bootstrap/Alert';
import axios from "axios"
import Closure from '../Closure';
import Container from 'react-bootstrap/esm/Container';


const Cart = () => {
  const userId = localStorage.getItem("userId");
  const [order, setOrder] = useState([])
  const token = localStorage.getItem("token");
  const [completed, setCompleted] = useState(false);

  const getData=()=>{
    axios.get(`https://swap-fmy1.onrender.com/orders/user/${userId}`,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res)=>{ 
      console.log("res",res.data.order);
      setOrder(res.data.order)
  }).catch((err)=>{
      console.log(err);
  })

  }

  useEffect(()=>{
    getData()
  },[]);

  console.log(order);

  const checkout= (id)=>{
    axios.put(`https://swap-fmy1.onrender.com/orders/checkout/${id}`,{
           checkout:true
        }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{
            console.log(res);
            getData()
            
            // get date
            /// hof >> map 
            
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
    <Container className='order'>
    {order.map((elem,i)=>{
      console.log(elem.checkout);
      return <>
      <Card className={elem.checkout?"bg-primary" : "bg-info"}>
      {/* <Card style{{}}={elem.checkout?"completed" : "not-completed"}> */}
      <Card.Header>Your Order No.{i+1} </Card.Header>
      <Card.Body>
        
        <Card.Title>The item:{elem.item.name} </Card.Title>
        <Card.Text>
        <Card.Img variant="top" src={elem.item.image} />
          <p>Description of Item : {elem.item.description} </p>
          <p>
            Seller's Details : 
            </p><p>
            -Contact:{elem.user.contact}
            -location:{elem.user.location}
          </p>
        </Card.Text>
        <Card.Text>
          { !elem.checkout ?
        <a variant="primary" className='bn39' onClick={()=>{
          checkout(elem._id)
        }} ><span class="bn39span">checkout</span></a> : <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Done!Check it out with the seller.">
        completed
      </button> }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Don't lose it</Card.Footer>
    </Card>

        
      </>
    })}
    </Container>
      
    </>

    <Closure/>

    </>

  )
}

export default Cart