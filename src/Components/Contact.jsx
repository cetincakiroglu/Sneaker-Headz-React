import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'

function Contact() {

    return (
        <>
            <Row className="my-5">
                <Col className="text-center">
                    <h1 className="font-display">Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mx-auto">
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
                            <Button variant="warning" id="formBtn">Send</Button>
                        </Form.Group>
                    </Form>
                    <span className="text-small">*We care about your information, every detail will be encryted and safe.</span>
                </Col>
            </Row>
        </>
    )
}

export default Contact
