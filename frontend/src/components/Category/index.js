import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const Category = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategoryList([...categoryList,...result.data.categories])
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <Container>
    
    {categoryList.map((elem,i)=>{
        
            return <> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <Button variant="primary" onClick={()=>{
                //!navigate
            }} >Go somewhere</Button>
            </Card.Body>
            </Card>
            </>

    })}
    </Container>
  )
}

export default Category