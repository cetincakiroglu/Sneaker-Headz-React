import React from 'react'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap'
import './Home.css'


import heroimg from '../images/background/heroimg.png'
import bgImg from '../images/background/background-1.png'
import bgImg2 from '../images/background/background-2.png'
import bgImg3 from '../images/background/background-2.png'
import product1 from '../images/product/product1.jpg'
import product2 from '../images/product/product2.png'
import product3 from '../images/product/product3.jpg'



function Home() {

  const featuredImages = [product1, product2, product3];


  return (
    <>
      <Container className="relative">
        <Row className="hero">
          <Col>
            <h1 className="display-1 font-display">Sneakz <br /> <span className="text-red">Up </span><br /> Move <span className="text-red"><br /> Forward</span></h1>
          </Col>
          <Image id="heroimg" src={heroimg} fluid />
        </Row>
        <Row className="relative featured">
          <Col>
            <h2>Featured Sneakerz</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between mt-5">
          {featuredImages.map((item, index) => (
            <Col md={4}>
              <Card className="text-dark">
                <Card.Img variant="top" src={item} fluid />
                <Card.Body>
                  <Card.Title className="font-secondary">Sneaker {index + 1}</Card.Title>
                  <Card.Text className="font-secondary">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
             </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" className="font-secondary">Add to cart</Button>
                    <Button className="like">❤︎</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default Home
