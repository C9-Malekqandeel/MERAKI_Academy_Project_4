import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategory(...category,result.data)
        }).catch((err)=>{
            console.log(err);
        })
    )
  return (
    

  )
}

export default Category