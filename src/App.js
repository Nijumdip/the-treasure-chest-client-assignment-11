import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/MainHome/Blogs/Blogs";
import Home from "./Components/MainHome/Home/Home";
import Inventory from "./Components/MainHome/Inventory/Inventory";
import ManageInventory from "./Components/MainHome/ManageInventory/ManageInventory";
import HeaderNav from "./Components/SharedPage/HeaderNav/HeaderNav";
import Login from "./Components/SocialLogin/Login/Login";
import Register from "./Components/SocialLogin/Register/Register";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manage" element={<ManageInventory/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
