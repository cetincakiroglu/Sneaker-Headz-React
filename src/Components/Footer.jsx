import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  const navItems = ["About", "Contact", "Terms of Service", "Privacy Policy"];

  return (
    <>
      <Container id="footer" className="container-fluid">
        <Row className="d-flex justify-content-between">
          <Col md={12} className="text-sm-center my-sm-3">
            <p>© 2021 Sneaker Headz Limited. All Rights Reserved.</p>
          </Col>
          <Col className=" my-sm-3 d-flex justify-content-between">
            {navItems.map((item) => (
              <Link className="footer-link" to="/">
                {item}
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
