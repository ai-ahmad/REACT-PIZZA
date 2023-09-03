import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Corzina = () => {
  let value = localStorage.getItem("product");
  let [product, setProduct] = useState(JSON.parse(value));

  // increment in shop
  function increment(item) {
    const updatedProduct = product.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, number: cartItem.number + 1 };
      }
      return cartItem;
    });

    setProduct(updatedProduct);
    localStorage.setItem("product", JSON.stringify(updatedProduct));
  }
  // decrement in shop
  function decrement(item) {
  const updatedProduct = product.map((cartItem) => {
    if (cartItem.id === item.id) {
      const newNumber = cartItem.number - 1;
      if (newNumber <= 0) {
        // If the new number is less than or equal to 0, remove the item from localStorage
        const updatedLocalStorage = JSON.parse(localStorage.getItem("product")) || [];
        const updatedLocalStorageWithoutItem = updatedLocalStorage.filter((localStorageItem) => localStorageItem.id !== item.id);
        localStorage.setItem("product", JSON.stringify(updatedLocalStorageWithoutItem));
        return null; // Return null to remove the item from the state
      } else {
        return { ...cartItem, number: newNumber };
      }
    }
    return cartItem;
  });

  const filteredUpdatedProduct = updatedProduct.filter((item) => item !== null); // Remove null entries from the state
  setProduct(filteredUpdatedProduct);
  localStorage.setItem("product", JSON.stringify(filteredUpdatedProduct));
}


  // Remove item from cart
  function removeItem(item) {
    const updatedProduct = product.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setProduct(updatedProduct);
    localStorage.setItem("product", JSON.stringify(updatedProduct));
  }

  return (
    <div className="bg-white p-10 rounded-2xl h-[725px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/img/logo.svg" alt="" />
          <div>
            <h2 className="text-2xl font-extrabold">REACT PIZZA</h2>
            <p className="text-base text-[#7B7B7B]">
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
      </div>

      {/* compoents 2 */}

      {product.length === 0 ? (
        <div className="h-[588px] flex flex-col items-center justify-center">
          <h4 className="text-3xl font-bold">Корзина пустая 😕</h4>
          <p className="text-[#777] max-w-[547px] w-full text-center text-lg mt-4">
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img src="/data-img/img.png" alt="" />
          <Link
            to="/"
            className="max-w-[210px] w-full h-[46px] bg-black text-white p-3 flex justify-center items-center rounded-3xl"
          >
            Вернуться назад
          </Link>
        </div>
      ) : (
        <div className="mt-11">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[32px] font-bold">Корзина</h3>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icon/musorka.svg" alt="" />
              <p className="text-[#B6B6B6]">Очистить корзину</p>
            </div>
          </div>
          <div className="flex justify-center items-center h-[400px] overflow-y-scroll  mt-3 mb-5 ">
            <div className="card-wrapper flex flex-col justify-center gap-10   w-[80%] mt-10">
              {product.map((item) => {
                return (
                  <div
                    className="card flex items-center gap-[10%] justify-center"
                    key={item.id}
                  >
                    <div className="flex items-center gap-[11px] max-w-[800px] w-full">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[80px] h-[80px]"
                      />
                      <div>
                        <h2 className="text-[22px]  font-bold">{item.name}</h2>
                        <p className="text-[#8D8D8D] text-[18px]">
                          тонкое тесто, 26 см.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        className="w-[40px] h-[40px] rounded-3xl border-2 border-solid border-[#FE5F1E] font-bold text-1xl flex justify-center items-center"
                        onClick={() => decrement(item)}
                      >
                        -
                      </button>
                      <h4 className="text-2xl font-bold">{item.number}</h4>
                      <button
                        className="w-[40px] h-[40px] rounded-3xl border-2 border-solid border-[#FE5F1E] font-bold text-1xl flex justify-center items-center"
                        onClick={() => increment(item)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <h2 className="text-[22px]  w-[61px] font-extrobold">
                        {item.price * item.number} ₽
                      </h2>
                    </div>
                    <div>
                      <button onClick={() => removeItem(item)}>
                        <img
                          src="/icon/minus.svg"
                          alt=""
                          className="w-[70px] h-[70px]"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col items-center justify-center gap-3">
              <h4 className="font-bold">Всего пицц: {product.length} шт.</h4>
              <Link
                to="/"
                className="max-w-[221px] w-full h-[55px] rounded-3xl text-[#CACACA] border-2 border-solid border-[#CACACA] p-3"
              >
                Вернуться назад
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <h4 className="font-bold">
                Сумма заказа:
                {product
                  .map((item) => item.price * item.number)
                  .reduce((defe, curent) => defe + curent, 0)
                  .toFixed(2)}{" "}
                ₽
              </h4>
              <Link
                to="/"
                className="max-w-[221px] w-full h-[55px] rounded-3xl text-[white] border-2 border-solid border-[#FE5F1E] bg-[#FE5F1E] p-3"
              >
                Оплатить сейчас
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Corzina;
