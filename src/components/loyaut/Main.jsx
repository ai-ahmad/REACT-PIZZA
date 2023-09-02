import React from "react";
import Filtration from "../component/Filtration";
import Card from "../component/Card";

const MainComponents = ({ upDate, product, title, addItem }) => {
  return (
    <main className="mt-11 mb-[20px]">
      <Filtration upDate={upDate} />
      <Card product={product} title={title} addItem={addItem} />
    </main>
  );
};

export default MainComponents;
