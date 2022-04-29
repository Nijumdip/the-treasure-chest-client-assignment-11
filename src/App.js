import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/MainHome/Home/Home";
import InventoryItems from "./Components/MainHome/InventoryItems/InventoryItems";
import HeaderNav from "./Components/SharedPage/HeaderNav/HeaderNav";

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<InventoryItems />} />
      </Routes>
    </div>
  );
}

export default App;
