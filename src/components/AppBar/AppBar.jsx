import React from "react";
import "./AppBar.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const AppBar = () => {
  return (
    <Navbar className="navbar" bg="light" variant="light">
      <Navbar.Brand href="#home">Jersey Store</Navbar.Brand>
      <Button className="cartButton" variant="info">
        <img
          alt=""
          src="../../images/icon-cart.png"
          width="30"
          height="30"
          className="cartImage"
        />
      </Button>
    </Navbar>
  );
};

export default AppBar;
