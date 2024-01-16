import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useEffect,useState,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

function Item() {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const {setItemId} = useContext(UserContext);

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

<Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>
        <h3>{elem.description}</h3>
        <h2>{elem.price}</h2>
        </Card.Text>
        <Card.Text>
        <Button variant="primary" onClick={()=>{
          setItemId(elem._id);
          navigate(`/item/${elem._id}`);
        }}>Show Item</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</>

    })}
    </Row>
    </Container>
    </>
  );
};

export default Item;