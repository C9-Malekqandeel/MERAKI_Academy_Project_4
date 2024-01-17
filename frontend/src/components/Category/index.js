import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './style.css'

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';


const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    const [itemCategory, setItemCategory] = useState([]);

    const {setCategoryId} = useContext(UserContext)
    
    


    useEffect(()=>{
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategoryList([...categoryList,...result.data.categories])
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(categoryList);
    


   /*  useEffect(()=>{
        axios.get(`http://localhost:5000/category/${idCategory}`).then((res)=>{
            console.log(res,"List");
            setItemCategory(...itemCategory,...res.data)
            }).catch((err)=>{
                console.log(err);
            })
        },[])
 */

  return (
    <>
    <Container className='box-category'>
    
        
           <Row md={16}>
           <h3>
         <Badge bg="secondary">Category</Badge>
      </h3>

      <Row className='category-line'>

    {categoryList.map((elem,i)=>{
        
            return <> 
            
            
            <Col className='card'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
            <a variant="primary" className='category' onClick={()=>{
                //!navigate
                setCategoryId(elem._id)
                navigate(`/category/${elem._id}`)
                

            }} >{elem.name}</a>
            </Card.Body>
            </Card>
            </Col>

            
            </>

    })}
    </Row>
    </Row>
    
    
    </Container>
    </>
  )
}

export default Category