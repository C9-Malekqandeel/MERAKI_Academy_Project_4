import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import Login from './components/Login'
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>

      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/users/register" element={<Register />} />
      <Route path="/users/login" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>}/>
      
      {/* 
      <Route path="/About" element={<about/>}/>
 */}
    </Routes>
  );
}

export default App;
