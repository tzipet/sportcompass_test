import React, { useState } from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductList from "./components/ProductList/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = product => {
    setCartItems(
      cartItems.filter(function(el) {
        return el.id !== product.id;
      })
    );
  };

  // var filtered = someArray.filter(function(el) { return el.Name != "Kristian"; });

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
