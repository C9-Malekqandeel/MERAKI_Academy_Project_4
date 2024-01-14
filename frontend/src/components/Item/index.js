import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Item() {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/items/random`).then((res)=>{
      console.log(res);
      setItems([...items,...res.data.items])
    }).catch((err)=>{
      console.log(err);
    }
    )
  },[]);

  console.log(items,"Items");


  return (
    <>
    <Container>
      <Row>
    {items.map((elem,i)=>{
      return <>
      <Col xs={{ order: 12 }}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elem.image} />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>{
          navigate(`/item/${elem._id}`)
        }}>Show Item</Button>
      </Card.Body>
    </Card>
    </Col></>

    })}
    </Row>
    </Container>
    </>
  );
};

export default Item;