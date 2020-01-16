import React, { useState } from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductList from "./components/ProductList/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <AppBar cartItems={cartItems}></AppBar>
      <ProductList
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      ></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
