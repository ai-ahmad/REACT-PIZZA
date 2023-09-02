import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ productLength }) => {
  console.log(productLength);
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/img/logo.svg" alt="" />
        <div>
          <h2 className="text-2xl  font-extrabold ">REACT PIZZA</h2>
          <p className="text-base text-[#7B7B7B] ">
            самая вкусная пицца во вселенной
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 max-w-[150px] w-full bg-[#FE5F1E] h-[50px] rounded-[30px] text-white">
        <div className="border-r-[1px] pr-3 border-solid border-white">
          <button className="font-bold">520 ₽</button>
        </div>
        <Link to="/shop" className="flex items-center gap-1">
          <img src="/icon/corzinka.svg" alt="" />
          <button className="font-bold">{productLength}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
