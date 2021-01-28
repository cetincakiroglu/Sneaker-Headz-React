import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Row, Col, Image, Carousel, Button, Breadcrumb } from 'react-bootstrap'
import products from '../../Data/productData.json'


function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const price = `$ ${(Math.floor(Math.random() * 199).toFixed(2))}`


  const details = products.results.filter((item) => item.id == id)
    .map((item) => (
      <>
        <Carousel className='mt-5 text-reset' >
          <Carousel.Item>
            <Row className="py-5 px-5 mx-5">
              <Col xs={6} md={4}>
                <Image src={item.src[0]} rounded fluid />
              </Col>
              <Col xs={6} md={4}>
                <Image src={item.src[1]} rounded fluid />
              </Col>
              <Col xs={6} md={4}>
                <Image src={item.src[2]} rounded fluid />
              </Col>
            </Row >
          </Carousel.Item>
          <Carousel.Item>
            <Row className="py-5 px-5 mx-5">
              <Col xs={6} md={4}>
                <Image src={item.src[0]} rounded fluid />
              </Col>
              <Col xs={6} md={4}>
                <Image src={item.src[1]} rounded fluid />
              </Col>
              <Col xs={6} md={4}>
                <Image src={item.src[2]} rounded fluid />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body className="text-dark">
                <Card.Title className="font-weight-bold font-secondary">{item.title}</Card.Title>
                <Card.Text className="font-secondary">
                  {item.detail}
                  <p>{price}</p>
                </Card.Text>
                <div className="d-flex justify-content-end m-2">
                  <Button className="mr-2 font-secondary" variant="warning">Add to Cart</Button>
                  <Button className="like">❤︎</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    ))

  return (
    <>
      <Row>
        <Col id="breadcrumb" className="d-flex py-4 mx-5" md={{ offset: 0 }}>

          <Breadcrumb.Item>
            <Link to='/Home' className="font-secondary">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/Products' className="font-secondary">Sneakers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="font-secondary">Sneaker Details</Breadcrumb.Item>
        </Col>

      </Row>
      {details}

    </>
  )
}

export default ProductDetails

