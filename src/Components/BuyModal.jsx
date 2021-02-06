import React from "react";
import { Modal, Button } from "react-bootstrap";

function BuyModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark font-secondary">
          Item {props.title} added to cart
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success font-secondary" onClick={props.handleClose}>
            Continue Shopping
          </Button>
          <Button variant="primary font-secondary" onClick={props.handleClose}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BuyModal;
