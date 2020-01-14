import React from "react";
import AppBar from "./components/AppBar/AppBar";
import ProductList from "./components/ProductList/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
