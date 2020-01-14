import React from "react";
import products from "../../products/products";
import "./Products.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col xs={12} sm={6} lg={4}>
            <Card className="productCard">
              <Card.Body>
                <Carousel interval={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.image1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.image2}
                      alt="second slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <Card.Title>{product.description}</Card.Title>
                <Card.Text>€ {product.price}</Card.Text>
                <Button variant="info">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
