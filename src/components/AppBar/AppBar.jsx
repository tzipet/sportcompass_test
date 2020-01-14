import React, { useState } from "react";
import "./AppBar.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AppBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar" bg="light" variant="light">
      <Navbar.Brand href="#home">Jersey Store</Navbar.Brand>
      <Button className="cartButton" variant="info" onClick={handleShow}>
        <img
          alt=""
          src="../../images/icon-cart.png"
          width="30"
          height="30"
          className="cartImage"
        />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Items in the cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default AppBar;
