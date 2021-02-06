import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const socialIcons = [
    {
      icon: <FaGithubSquare className="social-icon" />,
      link: "https://github.com/cetincakiroglu"
    },
    {
      icon: <FaLinkedin className="social-icon" />,
      link: "https://www.linkedin.com/in/cakiroglu-cetin/"
    },
    {
      icon: <FaTwitterSquare className="social-icon" />
    },
    {
      icon: <FaEnvelope className="social-icon" />,
      link: "mailto:cakiroglucetinn@gmail.com"
    }
  ];

  const contactSocials = socialIcons.map((item) => (
    <ExternalLink href={item.link} className="social-icon">
      {item.icon}
    </ExternalLink>
  ));

  return (
    <>
      <Row className="my-5">
        <Col className="text-left">
          <h1 className="font-display">Contact</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between">
        <Col md={4}>
          <Form id="contact-form" className="rounded">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="d-flex justify-content-around">
              <Button variant="warning" id="formBtn">
                Send
              </Button>
            </Form.Group>
          </Form>
          <span className="text-small">
            *We care about your information, every detail will be encryted and
            safe.
          </span>
        </Col>
        <Col md={4} className="d-flex flex-wrap justify-content-between">
          {contactSocials}
        </Col>
      </Row>
    </>
  );
}

export default Contact;
