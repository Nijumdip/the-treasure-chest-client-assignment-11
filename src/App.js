import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/MainHome/Blogs/Blogs";
import Home from "./Components/MainHome/Home/Home";
import Inventory from "./Components/MainHome/Inventory/Inventory";
import ManageItems from "./Components/MainHome/ManageItems/ManageItems";
import Footer from "./Components/SharedPage/Footer/Footer";
import HeaderNav from "./Components/SharedPage/HeaderNav/HeaderNav";
import Page404 from "./Components/SharedPage/Page404/Page404";
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
        <Route path="/manage" element={<ManageItems/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
