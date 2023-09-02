import React from "react";
import HeaderComponent from "../loyaut/header";
import FooterComponent from "../loyaut/Footer";
import MainComponents from "../loyaut/main";

const HomePage = ({ upDate, product, title, addItem, productLength }) => {
  return (
    <div className="bg-white container max-w-8xl rounded-xl my-auto p-5">
      <HeaderComponent productLength={productLength} />
      <MainComponents
        upDate={upDate}
        product={product}
        title={title}
        addItem={addItem}
      />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
