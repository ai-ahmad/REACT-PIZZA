import React from "react";
import Navbar from "../component/Navbar";

const HeaderComponent = ({productLength}) => {
  return (
    <header>
      <Navbar  productLength={productLength}/>
    </header>
  );
};

export default HeaderComponent;
