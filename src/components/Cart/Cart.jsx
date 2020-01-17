import React from "react";
import styles from "./Cart.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import NumericInput from "react-numeric-input";
import Button from "react-bootstrap/Button";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const onclick = product => {
    onRemoveFromCart(product);
  };
  return (
    <div>
      {cartItems && cartItems.length > 0
        ? cartItems.map(product => (
            <ListGroup>
              <ListGroup.Item>
                <div className={styles.cardContainer}>
                  <img
                    className={styles.itemImage}
                    src={product.image1}
                    alt={product.image2}
                  />

                  <div className={styles.itemBody}>
                    <span>{product.description}</span>
                    <span>€ {product.price}</span>
                  </div>
                  <div className={styles.quantityContainer}>
                    <span>Quantity</span>
                    <NumericInput
                      value={product.quantity}
                      min={1}
                      max={99}
                      className={styles.numericInput}
                      size={2}
                    />
                    <Button onClick={() => onclick(product)} variant="light">
                      x
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))
        : "Your shopping cart is empty!"}
    </div>
  );
};

export default Cart;
