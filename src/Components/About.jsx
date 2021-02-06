import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import bgImage from "../images/background/background-2.png";

function About({ searchResult }) {
  return (
    <>
      <Row>
        <Col className="mt-5">
          <h1 className="font-display">About</h1>
        </Col>
      </Row>
      <Row className="relative">
        <Col md={6} className="my-5">
          <p className="font-secondary">
            Welcome to <strong>Sneaker Headz</strong>, your number one source
            for coolest sneakers. We're dedicated to providing you the very best
            of a pair of shoe
          </p>
          <p className="font-secondary">
            Founded in 2021 by <strong>Çetin Çakıroğlu</strong>,{" "}
            <strong>Sneaker Headz</strong> has come a long way from its
            beginnings. When <strong>Çetin Çakıroğlu</strong> first started out,
            his passion to bring <strong>highest quality shoes</strong> to
            people, drove him to start his own business.
          </p>
          <p className="font-secondary">
            We hope you enjoy every step forward as much as we enjoy offering
            them to you. If you have any questions or comments, fill out the
            form in contact page.
          </p>
        </Col>
        <Col>
          <Image id="bgImg" src={bgImage} fluid />
        </Col>
      </Row>
    </>
  );
}

export default About;
