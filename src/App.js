import React, { useState } from "react";
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
  };

  const handleRemoveFromCart = product => {
    setCartItems(
      cartItems.filter(function(el) {
        return el.id !== product.id;
      })
    );
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
  };

  return (
    <div className="App">
      <AppBar
        cartItems={cartItems}
        onHandleRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
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
