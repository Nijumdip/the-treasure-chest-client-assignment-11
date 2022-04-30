import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/MainHome/Home/Home";
import Inventory from "./Components/MainHome/Inventory/Inventory";
import ManageInventory from "./Components/MainHome/ManageInventory/ManageInventory";
import HeaderNav from "./Components/SharedPage/HeaderNav/HeaderNav";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/manage" element={<ManageInventory/>} />
      </Routes>
    </div>
  );
}

export default App;
