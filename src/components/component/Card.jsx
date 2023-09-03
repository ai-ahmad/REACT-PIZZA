import React from "react";

const Card = ({ title, card, addFunction }) => {
  console.log(card);
  return (
    <section className="mt-5">
      <h1 className="font-bold  text-3xl">{title}</h1>
      <div className="flex flex-wrap gap-[7%] mt-10 items-center">
        {card.map((item) => {
          return (
            <div className="max-w-[280px] w-full h-[500px]" key={item.id}>
              <div className="flex flex-col max-w-[259px] w-full items-center gap-2">
                <img src={item.img} alt="logo" />
                <h1 className="font-extrabold text-xl">{item.name}</h1>
              </div>
              <div className="buttons-wrapper mt-4 bg-[#F3F3F3] rounded-md p-2 flex gap-3 flex-col ">
                <div className="flex">
                  <button className="font-bold w-[50%] shadow-md text-sm h-[40px] hover:bg-white rounded-lg  flex justify-center items-center">
                    тонкое
                  </button>
                  <button className="font-bold w-[50%] shadow-md text-sm h-[40px] hover:bg-white rounded-lg  flex justify-center items-center">
                    традиционное
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button className="font-bold hover:bg-[white] rounded-md hover: shadow-md max-w-[86px] w-full h-[32px] p-3  flex justify-center items-center">
                    26 cm .
                  </button>
                  <button className="font-bold hover:bg-[white] rounded-md hover: shadow-md max-w-[86px] w-full h-[32px] p-3 flex justify-center items-center">
                    30 cm .
                  </button>
                  <button className="font-bold hover:bg-[white] rounded-md hover: shadow-md max-w-[86px] w-full h-[32px] p-3 flex justify-center items-center">
                    40 cm .
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center h-[70px]">
                <h2 className="font-bold text-lg mt-3">от {item.price} ₽</h2>
                <button
                  className="w-[160px] flex items-center justify-center font-bold text-[#eb5a1e] p-3 rounded-3xl h-[40px] bg-white border-2 border-solid border-[#EB5A1E] relative"
                  onClick={() => addFunction(item)}
                >
                  + Добавить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
