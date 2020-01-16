import React from "react";
import styles from "./Cart.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import NumericInput from "react-numeric-input";
import Button from "react-bootstrap/Button";

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems && cartItems.length > 0
        ? cartItems.map(item => (
            <ListGroup>
              <ListGroup.Item>
                <div className={styles.cardContainer}>
                  <img
                    className={styles.itemImage}
                    src={item.image1}
                    alt={item.image2}
                  />

                  <div className={styles.itemBody}>
                    <span>{item.description}</span>
                    <span>€ {item.price}</span>
                  </div>
                  <div className={styles.quantityContainer}>
                    <span>Quantity</span>
                    <NumericInput
                      value={1}
                      min={1}
                      max={99}
                      className={styles.numericInput}
                      size={2}
                    />
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))
        : "Items in the cart!"}
    </div>
  );
};

export default Cart;
