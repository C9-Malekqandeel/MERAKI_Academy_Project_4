import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <Routes>

      {/* <Route path="/Home" element={<Home/>}/> */}
      <Route path="/users/register" element={<Register />} />
      {/* <Route path="/users/login" element={<Login/>} />
      <Route path="/About" element={<about/>}/> */}

    </Routes>
  );
}

export default App;
