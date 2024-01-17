import React,{useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';


const CreateComment = ({item,read,comments}) => {
  
  
console.log(comments);

  return (

    <>
    {item.length>0 && comments.map((elem,i)=>{
        return <>
        {/* <ListGroup as="ul">
      <ListGroup.Item as="li" disabled>
        <h5>Comment. {i+1} </h5>
        {elem.comment}
      </ListGroup.Item>
      </ListGroup> */}
      <ListGroup as="ul">
      <ListGroup.Item as="li" disabled>
        <h5>Comment. {i+1} </h5>
       {elem.comment}
      </ListGroup.Item>
      </ListGroup>
        </>
    })}
    <ListGroup as="ul">
      <ListGroup.Item as="li" disabled>
        <h5>Comment. </h5>
        {read}
      </ListGroup.Item>
      </ListGroup>
    
    
    </>

    )
}

export default CreateComment;