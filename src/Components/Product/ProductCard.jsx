import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Card, Button} from 'react-bootstrap'

function ProductCard(props) {
    return (
            <>
                    <Col sm={4} key={props.key} className="mt-4">
                      <Card>
                          <Card.Img variant="top" src={props.src[0]}/>
                          <Card.Body className="text-dark text-center">
                              <Card.Title>{props.title}</Card.Title>
                              <Card.Text>
                                  {props.detail}
                              </Card.Text>
                              <Button onClick={props.handleShow}variant="warning">Buy Now</Button>

                              <Link to={`ProductDetails/${props.id}`} className="btn btn-success ml-4">See Details</Link>
                           
                          </Card.Body>
                      </Card>
                    </Col>
            </>
    )
}

export default ProductCard
