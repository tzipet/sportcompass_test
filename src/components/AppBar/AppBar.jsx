import React, { useState } from "react";
import "./AppBar.css";
import Cart from "../Cart/Cart";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AppBar = ({ cartItems, onHandleRemoveFromCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let initialValue = 0;
  let totalAmount = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  return (
    <Navbar className="navbar" bg="light" variant="light">
      <Navbar.Brand href="#home">Jersey Store</Navbar.Brand>
      <Button className="cartButton" variant="primary" onClick={handleShow}>
        <img
          alt=""
          src="../../images/icon-cart.png"
          width="30"
          height="30"
          className="cartImage"
        />
        {cartItems.length > 0 ? (
          <span class="badge badge-pill">{cartItems.length}</span>
        ) : null}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={onHandleRemoveFromCart}
          />
        </Modal.Body>
        <Modal.Footer className="checkoutContainer">
          <div>Total Amount: € {totalAmount}</div>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default AppBar;
