import React from "react";
import HeaderComponent from "../loyaut/header";
import FooterComponent from "../loyaut/Footer";
import MainComponents from "../loyaut/main";

const HomePage = ({ filter, title, card, addFunction }) => {
  return (
    <div className="bg-white container max-w-8xl rounded-xl my-auto p-5">
      <HeaderComponent />
      <MainComponents
        filter={filter}
        title={title}
        card={card}
        addFunction={addFunction}
      />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
