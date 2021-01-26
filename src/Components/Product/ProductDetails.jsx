import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {Card,Row, Col,Image, Carousel,Button} from 'react-bootstrap'
import products from '../../Data/productData.json'

function ProductDetails() {
   const {id} = useParams();
   const price =`$ ${(Math.floor(Math.random()*199).toFixed(2))}`
   

    const details = products.results.filter((item) => item.id == id)
                                    .map((item)=>(
                                        <>
<Carousel style={{'color':"#242424"}} className='mt-5' id="carousel">
  <Carousel.Item>
  <Row className="py-5 px-5 mx-5">
    <Col xs={6} md={4}>
      <Image src={item.src[0]} rounded fluid />
    </Col>
    <Col xs={6} md={4}>
      <Image src={item.src[1]} rounded fluid/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={item.src[2]} rounded fluid/>
    </Col>
  </Row >
  </Carousel.Item>
  <Carousel.Item>
  <Row className="py-5 px-5 mx-5">
    <Col xs={6} md={4}>
      <Image src={item.src[0]} rounded fluid />
    </Col>
    <Col xs={6} md={4}>
      <Image src={item.src[1]} rounded fluid/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={item.src[2]} rounded fluid/>
    </Col>
  </Row>
  </Carousel.Item>
</Carousel>
<Row className="d-flex justify-content-center bg-success">
    <Col xs={4}>
<Card>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      {item.detail}
    </Card.Text>
    <Button  variant="warning">Add to Cart</Button>
    <button id="like">❤︎</button>
  </Card.Body>
</Card>
    </Col>
</Row>
</>
                                    ))

    return (
        <>
                {details}
        </>
    )
}

export default ProductDetails



{/* <Row className="margin-top">
                                            <Col md={6}>
                                                <Image src={item.src[0]} fluid/>
                                            </Col>
                                            <Col md={6}>
                                            
                                            <Col md={4}>
                                                <Image src={item.src[1]} fluid/>
                                            </Col>
                                            <Col md={4}>
                                                <Image src={item.src[2]} fluid/>
                                            </Col>
                                            </Col>
                                        </Row> */}