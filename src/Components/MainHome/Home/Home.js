import React from "react";
import Banner from "../Banner/Banner";
import InventoryHome from "../InventoryHome/InventoryHome";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryHome></InventoryHome>
      <Services></Services>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
