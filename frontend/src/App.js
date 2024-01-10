import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>

      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/users/register" element={<Register />} />
      {/* <Route path="/users/login" element={<Login/>} />
      <Route path="/About" element={<about/>}/> */}

    </Routes>
  );
}

export default App;
