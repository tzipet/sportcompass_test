import React from "react";
import products from "../../products/products";
import "./Products.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductList = () => {
  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col xs={12} sm={6} lg={4}>
            <Card className="productCard">
              <Card.Img variant="top" src={product.image1} />
              <Card.Body>
                <Card.Title>{product.description}</Card.Title>
                <Card.Text>€ {product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
