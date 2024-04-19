import React from "react";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../Store/CartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    // Dispatch add action
    dispatch(add(product));
  };
  const cards = products.map((product) => {
    return (
      <div className="col-md-3 col-sm-6 mb-1 d-flex flex-wrap align-items-center justify-content-center">
        <Card
          key={product.id}
          className="h-100 mb-3"
          style={{ width: "18rem" }}
        >
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>price: ${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center bg-white">
            <Button
              variant="primary"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div>
      {/* {JSON.stringify(products)} */}
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
};

export default Product;
