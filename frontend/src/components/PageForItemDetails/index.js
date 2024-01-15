import React, { useEffect,useState } from 'react'
import HeadBarHome from '../HeadBarHome'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';

const PageForItemDetails = () => {
    const {name} = useParams();
    const [item, setItem] = useState([])
    //! will be used context from App itemId

    useEffect(()=>{
        axios.get(`http://localhost:5000/items/item/${name}`).then((result)=>{
            console.log("data",result.data.item);
            setItem(result.data.item)
        }).then((err)=>{
            console.log(err);
    })
    },[]);

    console.log(item[0].name);

  return (
    <>
    <HeadBarHome/>
    {item.map((elem,i)=>{
        return <> <h2>
        {Example heading} <Badge bg="secondary">New</Badge>
      </h2>

      </>
    })}
    

    </>
    )
}

export default PageForItemDetails