import React,{useState,createContext,useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Figure from 'react-bootstrap/Figure';
import CreateItem from '../CreateItem';
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import ModalForShowCreateItem from '../ModalForShowCreateItem';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

import './style.css'

export const CategoryContext = createContext();


const CategoryListForCreateItem = () => {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();

    const {setCategoryId} = useContext(UserContext)
    const [itemCategory, setItemCategory] = useState([]);
    const [category, setCategory] = useState("");
    const [modalShow, setModalShow] = useState("");
    


    useEffect(()=>{
        axios.get('http://localhost:5000/category').then((result)=>{
            setCategoryList([...categoryList,...result.data.categories])
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    console.log(categoryList);

  return (
    <>
    <CategoryContext.Provider value={category}>
      <h3>
        Choose Category to post your item <Badge bg="secondary">New Item!</Badge>
      </h3>

    <Stack direction="horizontal" gap={3}>

        {categoryList.map((elem,i)=>{
            return <>
            <div className="box">

            <div class="overlay"></div>

            <Figure>
            <Figure.Image className='circle'
              src={elem.image}
              onClick={()=>{
                setCategory(elem._id)
                
                {<CreateItem/>}
              }}
            />
            <Figure.Caption >
              
            <a variant="primary" className='bn5' onClick={() => {
            setModalShow(elem._id) 
            setCategoryId(elem._id)
          }}>
        {elem.name}
      </a>
            </Figure.Caption>

           
          </Figure>
          
          

      <ModalForShowCreateItem
        show={modalShow} category={elem._id}
        onHide={() => setModalShow(false)}
      />
      </div>
          </>

        })}
        </Stack>
    </CategoryContext.Provider>

    </>
   )
}

export default CategoryListForCreateItem