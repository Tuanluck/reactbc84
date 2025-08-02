import React from "react";
import Header from "./Header";
import CardProduct from "./CardProduct";
import Footer from "./Footer";
import Navigation from "./Navigation";


const BT1_HomeComponents = () => {
  return (
    <div className="bt1">
      <Header></Header>
      <div className="container d-flex gap-20">
        <div className="left ">
          <Navigation></Navigation>
        </div>
        <div className="right d-flex gap-5">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BT1_HomeComponents;
