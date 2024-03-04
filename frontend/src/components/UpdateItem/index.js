import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useContext, useEffect ,useState} from 'react';
import { UserContext } from '../../App';
import { CategoryContext } from '../CategoryListForCreateItem.js';
import { ItemContext } from '../ItemsForUser/index.js';

function UpdateItem({id}) {

    const {userId,token} = useContext(UserContext);

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState();
    
    
    const [comment, setComment] = useState([])
    
    

    
    const UpdateItemForUser=()=>{
        axios.put(`https://swap-fmy1.onrender.com/items/update/${id}`,{
            name,
            image,
            description,
            price,
            category,
            userId,
            comment
        }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
    };



  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name of Item" onChange={(e)=>{
            setName(e.target.value)
          }}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="ULR image" onChange={(e)=>{
            setImage(e.target.value)
          }} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Description Here!" onChange={(e)=>{
            setDescription(e.target.value)
          }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Price</Form.Label>
        <Form.Control placeholder="Price" onChange={(e)=>{
            setPrice(e.target.value)
          }}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Comment</Form.Label>
          <Form.Control placeholder='Any Comments!'  onChange={(e)=>{
            setComment([...comment,e.target.value])
          }}/>
        </Form.Group>

        
        </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Confirm please here!" />
      </Form.Group>

      <Button variant="primary" onClick={()=>{
        UpdateItemForUser()
      }}>
        Update 
      </Button>
    </Form>
  );
}

export default UpdateItem;