import React, { useState } from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductList from "./components/ProductList/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const checkIfProductExistsInCart = product =>
    cartItems.find(el => el.id === product.id);

  const getProductQuantity = product => {
    const procuctInCart = checkIfProductExistsInCart(product);
    let index = cartItems.indexOf(procuctInCart);
    if (index > -1) {
      return cartItems[index].quantity ? cartItems[index].quantity + 1 : 1;
    }
    return 1;
  };

  const handleAddToCart = product => {
    const quantifiedProduct = Object.assign({}, product, {
      quantity: getProductQuantity(product)
    });
    setCartItems([...cartItems, quantifiedProduct]);
  };

  const handleRemoveFromCart = product => {
    setCartItems(
      cartItems.filter(function(el) {
        return el.id !== product.id;
      })
    );
  };

  return (
    <div className="App">
      <AppBar
        cartItems={cartItems}
        onHandleRemoveFromCart={handleRemoveFromCart}
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
