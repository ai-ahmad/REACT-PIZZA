import React from "react";
import Filtration from "../component/Filtration";
import Card from "../component/Card";

const MainComponents = ({ filter , title , card ,addFunction }) => {
  return (
    <main className="mt-11 mb-[20px]">
      <Filtration  filter={filter} />
      <Card title={title} card={card} addFunction={addFunction}/>
    </main>
  );
};

export default MainComponents;
