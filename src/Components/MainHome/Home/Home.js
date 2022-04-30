import React from "react";
import Footer from "../../SharedPage/Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Services></Services>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
