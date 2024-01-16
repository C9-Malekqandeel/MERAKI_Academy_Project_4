import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from './components/Login'
import Dashboard from "./components/Dashboard";
import About from './components/About'
import ItemPage from "./components/ItemPage";
import {useState, createContext } from "react";
import Cart from './components/Cart'
import PageForItemDetails from "./components/PageForItemDetails";

export const UserContext = createContext();


function App() {

    const [token, setToken] = useState(""||localStorage.getItem("token"));

    const [isLoggedIn, setIsLoggedIn] = useState(false ||localStorage.getItem("isLoggedIn"));

    const [userId, setUserId] = useState(""|| localStorage.getItem("userId"));
    const [itemId, setItemId] = useState("");
    const [categoryId, setCategoryId] = useState("")

  return (
    <UserContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,userId,setUserId,itemId,setItemId,categoryId,setCategoryId}}>

    <Routes>

      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/users/register" element={<Register />} />
      <Route path="/users/login" element={<Login/>} />
      <Route path="/Category/:id" element={<ItemPage/>}/>
{ isLoggedIn && <>
      <Route path="/users/Dashboard" element={<Dashboard/>}/>
      <Route path="/orders" element={<Cart/>}/>
      </> 
}
      <Route path="/item/:id" element={<PageForItemDetails/>}/>

    </Routes>

    </UserContext.Provider>
  );
}

export default App;
