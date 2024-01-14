import React,{useState,createContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Figure from 'react-bootstrap/Figure';
import CreateItem from '../CreateItem';
import axios from 'axios'
import ModalForShowCreateItem from '../ModalForShowCreateItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const CategoryContext = createContext();


const CategoryListForCreateItem = () => {
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    const [itemCategory, setItemCategory] = useState([]);
    const [category, setCategory] = useState("");
    const [modalShow, setModalShow] = useState(false);
    


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
        {categoryList.map((elem,i)=>{
            return <>
            <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={elem.image}
              onClick={()=>{
                setCategory(elem._id)
                
                {<CreateItem/>}
              }}
            />
            <Figure.Caption >
              {elem.name}
            </Figure.Caption>
          </Figure>
          
          <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalForShowCreateItem
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </>

        })}
    </CategoryContext.Provider>

    </>
   )
}

export default CategoryListForCreateItem