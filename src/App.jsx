import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Corzina from "./components/component/Corzina";
import HomePage from "./components/pages/HomePage";
import Pages404 from "./components/component/404Pages";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // Variables
  // Backend URL variables
  let [URL, setURL] = useState("http://localhost:3000/All");
  // Product variables
  let [product, setProduct] = useState([]);
  // Filter product names variables
  let [title, setTitle] = useState("Все");
  // Local storage in product variables
  let [ShopProduct, setShopProduct] = useState([]);

  // Filtration function
  function filter(e) {
    if (e.target.value === "all") {
      setURL("http://localhost:3000/All");
      setTitle("Все");
    } else if (e.target.value === "meat") {
      setURL("http://localhost:3000/Meat");
      setTitle("Мясные");
    } else if (e.target.value === "vigtails") {
      setURL("http://localhost:3000/Vigtails");
      setTitle("Вегетарианская");
    } else if (e.target.value === "gril") {
      setURL("http://localhost:3000/Gril");
      setTitle("Гриль");
    } else if (e.target.value === "fas") {
      setURL("http://localhost:3000/Ostriy");
      setTitle("Острые");
    } else if (e.target.value === "closed") {
      setURL("http://localhost:3000/Close");
      setTitle("Закрытые");
    }
  }

  // Integration with backend
  useEffect(() => {
    axios.get(URL).then((res) => setProduct(res.data));
  }, [URL]);

  function ItemAdd(e) {
    const existingProduct = ShopProduct.find(
      (cartItem) => cartItem.name === e.name
    );

    if (existingProduct) {
      const updatedProduct = ShopProduct.map((cartItem) => {
        if (cartItem.id === existingProduct.id) {
          return { ...cartItem, number: cartItem.number + 1 };
        } else {
          return cartItem;
        }
      });

      setShopProduct(updatedProduct);
      localStorage.setItem("product", JSON.stringify(updatedProduct));
    } else {
      ShopProduct.push(e);
      localStorage.setItem("product", JSON.stringify(ShopProduct));
    }

    if (ShopProduct.length > 0) {
      console.log("Cart is not empty :)");
    } else {
      const values = localStorage.getItem("product");
      const produc = JSON.parse(values);
      setShopProduct(produc);
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
                filter={filter}
                title={title}
                card={product}
                addFunction={ItemAdd}
              />
            }
          />
          <Route path="/shop" element={<Corzina />} />
          <Route path="/404" element={<Pages404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
