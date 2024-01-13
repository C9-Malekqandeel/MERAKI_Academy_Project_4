import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from './components/Login'
import Dashboard from "./components/Dashboard";
import About from './components/About'
import ItemPage from "./components/ItemPage";
import {useState, createContext } from "react";

export const UserContext = createContext();


function App() {

    const [token, setToken] = useState(""||localStorage.getItem("token"));

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const [userId, setUserId] = useState("second");
    const [itemId, setItemId] = useState("");
    const [categoryId, setCategoryId] = useState("")

  return (
    <UserContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,userId,setUserId,itemId,setItemId,categoryId,setCategoryId}}>

    <Routes>

      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/users/register" element={<Register />} />
      <Route path="/users/login" element={<Login/>} />
      <Route path="/users/Dashboard" element={<Dashboard/>}/>
      <Route path="/Category/:id" element={<ItemPage/>}/>

      {
      <Route path="/About" element={<about/>}/>
}
    </Routes>

    </UserContext.Provider>
  );
}

export default App;
