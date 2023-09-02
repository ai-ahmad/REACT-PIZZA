import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Corzina from "./components/component/Corzina";
import axios from "axios";
import { useEffect, useState } from "react";
import Pages404 from "./components/component/404Pages";

function App() {
  let [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [ShopProduct, setShop] = useState([]);
  let [productLength, setProductLength] = useState(ShopProduct.length);
  let [URL, setURL] = useState("http://localhost:3000/All");
  let [title, setTitle] = useState("Все пиццы");
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  function upDate(e) {
    if (e.target.value === "all") {
      setURL(" http://localhost:3000/All");
      setTitle("Все пиццы");
    } else if (e.target.value === "closed") {
      setURL("http://localhost:3000/Close");
      setTitle("Закрытые пиццы");
    } else if (e.target.value === "fas") {
      setURL("http://localhost:3000/Ostriy");
      setTitle("Острые пиццы");
    } else if (e.target.value === "gril") {
      setURL("http://localhost:3000/Gril");
      setTitle("Грильные пиццы");
    } else if (e.target.value === "vigtails") {
      setURL("http://localhost:3000/Vigtails");
      setTitle("Вегетарианская пиццы");
    } else if (e.target.value === "meat") {
      setURL("http://localhost:3000/Meat");
      setTitle("Мясные пиццы");
    }
  }
  function addItem(e) {
    const itemShop = ShopProduct.find((item) => item.name === e.name);
    if (itemShop) {
      itemShop.number += 1;
      alert(`${e.name} уже есть в корзине`);
    } else {
      ShopProduct.push(e);
    }
    console.log(ShopProduct.length);
  }

  function delitItem(e) {
    let newProduct = ShopProduct.filter((item) => item.id !== e.id);
    setShop(newProduct);
    console.log(ShopProduct);
  }

  function minus(e) {
    if (e.number > 0) {
      e.number -= 1;
      console.log(ShopProduct);
    }
    if (e.number === 0) {
      let newProduct = ShopProduct.filter((item) => item.id !== e.id);
      setShop(newProduct);
      console.log(ShopProduct);
    }
  }

  return (
    <div className="w-full h-full p-[2%] bg-[#FFDF8C]">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                upDate={upDate}
                product={product}
                title={title}
                addItem={addItem}
                productLength={productLength}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Corzina
                ShopProduct={ShopProduct}
                delitItem={delitItem}
                minus={minus}
              />
            }
          />
          <Route path="/404" element={<Pages404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
