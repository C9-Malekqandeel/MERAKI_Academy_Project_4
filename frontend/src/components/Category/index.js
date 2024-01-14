import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
 
    <Container /* style={{ display: flex }} */>
        
           <Row md={8}>

    {categoryList.map((elem,i)=>{
        
            return <> 
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <Button variant="primary" onClick={()=>{
                //!navigate
                setCategoryId(elem._id)
                navigate(`/category/${elem._id}`)
                

            }} >Check Items!</Button>
            </Card.Body>
            </Card>
            </Col>
            </>

    })}
    </Row>
    
    
    </Container>
  )
}

export default Category