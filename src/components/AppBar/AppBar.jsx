import React, { useState } from "react";
import "./AppBar.css";
import Cart from "../Cart/Cart";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AppBar = ({
  cartItems,
  onHandleRemoveFromCart,
  onUpdateQuantity,
  onHandleClearLocalStorage
}) => {
  const [cartModalShow, setCartModalShow] = useState(false);
  const [finalModalShow, setFinalModalShow] = useState(false);

  const handleCloseCheckout = () => {
    setCartModalShow(false);
    onHandleClearLocalStorage();
    setFinalModalShow(true);
  };

  const handleCloseModal = () => {
    setCartModalShow(false);
  };

  const handleShow = () => setCartModalShow(true);

  let initialValue = 0;
  let totalAmount = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    initialValue
  );

  let totalQuantity = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
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
          onError={event => {
            event.target.setAttribute(
              "src",
              `${process.env.PUBLIC_URL}/images/defaultImage.png`
            );
            event.target.onError = null;
          }}
        />
        {cartItems.length > 0 ? (
          <span className="badge badge-pill">{totalQuantity}</span>
        ) : null}
      </Button>
      <Modal show={cartModalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={onHandleRemoveFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        </Modal.Body>
        <Modal.Footer className="checkoutContainer">
          <div>Total Amount: € {totalAmount}</div>
          <Button variant="primary" onClick={handleCloseCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        size="sm"
        show={finalModalShow}
        onHide={() => setFinalModalShow(false)}
      >
        <Modal.Header className="final-modal-container">
          <Modal.Title className="final-modal-body">
            Thank you for your purchase!
          </Modal.Title>
          <Button onClick={() => setFinalModalShow(false)}>
            Continue Shopping!
          </Button>
        </Modal.Header>
      </Modal>
    </Navbar>
  );
};

export default AppBar;
