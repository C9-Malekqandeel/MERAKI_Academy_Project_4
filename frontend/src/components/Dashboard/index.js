import React, { useContext,useEffect, useState} from 'react';
import axios from "axios";
import { UserContext } from '../../App';
import NavBarSignIn from '../NavBarSignIn';
import Alert from 'react-bootstrap/Alert';
import CreateItem from '../CreateItem';
import Category from '../Category';
import CategoryListForCreateItem from '../CategoryListForCreateItem.js';
import ItemsForUser from '../ItemsForUser/index.js';
import Closure from '../Closure/index.js';
import Container from 'react-bootstrap/esm/Container.js';



const Dashboard = () => {
    //will be converted directly once the user logged in his account

    const {token,userId}= useContext(UserContext)

    //! navbar
    //! calender
    //! dataAccount
    //! hisItems>> updates
    //! How web works
    //! Create Post>> NewItem

    //!Let's do on modals
    //? Create Item
    //?update Item
    //?delete Item
    //? Get Item By user

    //? Showing his order >> invigate  
    //? Delete order one the same page
    //? Checkout

    //? Home page 

  return (
       <>

    <NavBarSignIn/>

    <Alert  variant={"info"}>
        Welcome to your board
        </Alert>
    
    <CategoryListForCreateItem/>

<br></br>
    <Alert  variant='secondary'>
          Check your items from HERE!
        </Alert>
        
        <Container>
    <ItemsForUser/>
    </Container>


    <Closure/>


        </>
    )
}

export default Dashboard