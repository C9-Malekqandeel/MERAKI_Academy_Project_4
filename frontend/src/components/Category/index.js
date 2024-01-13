import React,{useEffect,useState,createContext} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNavigate } from 'react-router-dom';


export const CategoryContext = createContext();

const Category = () => {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    const [itemsFromCategory, setItemsFromCategory] = useState();


    useEffect(()=>{
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategoryList([...categoryList,...result.data.categories])
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(categoryList);

    const itemMovePage = (data)=>{
        axios.get(`http://localhost:5000/category/${data}`).then((res)=>{
            navigate(`/category/${data}`)
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <CategoryContext.Provider value={itemsFromCategory}>

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
                itemMovePage(elem._id)
                setItemsFromCategory(elem.id)

            }} >Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            </>

    })}
    </Row>
    </Container>
    </CategoryContext.Provider>
  )
}

export default Category