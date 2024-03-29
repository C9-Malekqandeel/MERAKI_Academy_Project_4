import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useContext, useEffect ,useState} from 'react';
import { UserContext } from '../../App';
import Alert from 'react-bootstrap/Alert';

import { CategoryContext } from '../CategoryListForCreateItem.js';

function CreateItem({id}) {
  console.log(id,"use");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState([]);
    const [alert, setAlert] = useState(false);
    
    
    const [comment, setComment] = useState([])
    
    const {userId,token,categoryId,setItemsUser} = useContext(UserContext);


    useEffect(()=>{
        axios.get("https://swap-fmy1.onrender.com/category").then((res)=>{
            setCategories([...categories,...res.data.categories]);
            console.log(res.data.categories);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(userId, "user");
    console.log(categoryId, "category");

    
    


  return (
    <>
  
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

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            {categories.map((elem,i)=>{
                return <option onClick={()=>{
                    categoryName(elem)
                }} >{elem.name}</option>
            })}
            
            
          </Form.Select>
        </Form.Group> */}
        </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={()=>{
        axios.post(`https://swap-fmy1.onrender.com/items/create/${userId}`,{
            name,
            image,
            description,
            price,
            category:id,
            userId,
            comment
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }).then((res)=>{
            console.log(res.data);
            const a=[res.data.item]
            setItemsUser(prev=>[...prev,res.data.item])
            setAlert(true)
            //
        }).catch((err)=>{
            console.log(err);
        })
      }}>
        Post 
      </Button>
      {alert && <> <Alert variant="warning">
          Great! your item was posted.
        </Alert> </> }
    </Form>
    </>
  );
}

export default CreateItem;