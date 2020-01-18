import React from "react";
import products from "../../products/products";
import styles from "./Products.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
const ProductList = ({ onAddToCart, cartItems }) => {
  const onclick = product => {
    onAddToCart(product);
  };

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} lg={4}>
            <Card className={styles.productCard}>
              <Card.Body>
                <Carousel interval={false}>
                  {product.images.map(image => (
                    <Carousel.Item>
                      <Image
                        fluid={true}
                        src={image}
                        alt="First img"
                        onError={event => {
                          event.target.setAttribute(
                            "src",
                            `${process.env.PUBLIC_URL}/images/placeholder.jpg`
                          );
                          event.target.onError = null;
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <hr className={styles.hr} />
                <div className={styles.productInfoContainer}>
                  <Card.Title className={styles.productTitle}>
                    {product.description}
                  </Card.Title>
                  <Card.Text>€ {product.price}</Card.Text>
                  <Button onClick={() => onclick(product)} variant="primary">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
