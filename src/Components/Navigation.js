import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-2">
        <Container>
          <Navbar.Brand className="justify-content-start">
            Product Store using Redux Toolkit
          </Navbar.Brand>
          {/* <Link to="/" className="nav=link">Products</Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="">
              <Nav.Item className="me-3">
                <Link to="/" className="nav=link">
                  Products
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/cart" className="nav=link">
                  Cart {}
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
