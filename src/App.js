import React, { useState, useEffect } from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductList from "./components/ProductList/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const checkIfProductExistsInCart = product =>
    cartItems.find(el => el.id === product.id);

  const handleAddToCart = product => {
    const alreadyExists = checkIfProductExistsInCart(product);
    let newCartItems = [];
    if (alreadyExists) {
      newCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(newCartItems);
    window.localStorage.setItem("itemsInTheCart", JSON.stringify(newCartItems));
  };

  const handleRemoveFromCart = product => {
    let newCartItems = [];
    newCartItems = cartItems.filter(function(el) {
      return el.id !== product.id;
    });
    setCartItems(newCartItems);
    window.localStorage.setItem("itemsInTheCart", JSON.stringify(newCartItems));
  };

  const handleUpdateQuantity = (valueAsNumber, product) => {
    let newCartItems = [];
    newCartItems = cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: valueAsNumber };
      } else {
        return { ...item };
      }
    });

    setCartItems(newCartItems);
    window.localStorage.setItem("itemsInTheCart", JSON.stringify(newCartItems));
  };

  const handleClearLocalStorage = () => {
    let newCartItems = [];
    window.localStorage.clear();
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const newCartItems = JSON.parse(
      window.localStorage.getItem("itemsInTheCart")
    );
    if (newCartItems) {
      setCartItems(newCartItems);
    }
  }, []);

  return (
    <div className="App">
      <AppBar
        cartItems={cartItems}
        onHandleRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onHandleClearLocalStorage={handleClearLocalStorage}
      ></AppBar>
      <ProductList
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      ></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
