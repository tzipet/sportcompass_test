import React from "react";
import styles from "./Cart.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import NumericInput from "react-numeric-input";
import Button from "react-bootstrap/Button";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const handleRemoveClick = product => {
    onRemoveFromCart(product);
  };

  const valueSelect = (valueAsNumber, product) => {
    onUpdateQuantity(valueAsNumber, product);
  };
  return (
    <div>
      {cartItems && cartItems.length > 0
        ? cartItems.map(product => (
            <ListGroup key={product.id}>
              <ListGroup.Item>
                <div className={styles.cardContainer}>
                  <img
                    className={styles.itemImage}
                    src={product.images[0]}
                    alt={product.images[0]}
                    onError={event => {
                      event.target.setAttribute(
                        "src",
                        `${process.env.PUBLIC_URL}/images/placeholder.jpg`
                      );
                      event.target.onError = null;
                    }}
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
                      onChange={valueAsNumber =>
                        valueSelect(valueAsNumber, product)
                      }
                    />
                    <Button
                      onClick={() => handleRemoveClick(product)}
                      variant="light"
                    >
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
