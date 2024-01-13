import React,{useEffect,useState,createContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

import { useNavigate } from 'react-router-dom';


export const ItemContext = createContext();

const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    const [itemCategory, setItemCategory] = useState([]);
    const [idCategory, setIdCategory] = useState()


    useEffect(()=>{
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategoryList([...categoryList,...result.data.categories])
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(categoryList);
    console.log(itemCategory,"PPP");


    useEffect(()=>{
        axios.get(`http://localhost:5000/category/${idCategory}`).then((res)=>{
            console.log(res,"List");
            setItemCategory(...itemCategory,...res.data)
            }).catch((err)=>{
                console.log(err);
            })
        },[])


  return (
 
    <Container /* style={{ display: flex }} */>
        <ItemContext.Provider value={itemCategory}>
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
                setIdCategory(elem._id)
                navigate(`/category/${elem._id}`)
                

            }} >Check Items!</Button>
            </Card.Body>
            </Card>
            </Col>
            </>

    })}
    </Row>
    </ItemContext.Provider>
    </Container>
  )
}

export default Category