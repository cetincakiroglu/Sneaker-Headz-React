import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'

import ProductCard from './Product/ProductCard'
import BuyModal from './BuyModal'
import productData from '../Data/productData.json'

function Products() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showProducts = productData.results.map((item) => (
        <>
            <ProductCard
                key={item.index}
                title={item.title}
                detail={item.detail}
                src={item.src}
                id={item.id}
                handleShow={handleShow}
            />

        </>
    ))
    return (
        <>
            <Container>
                <Row className="my-5">
                    <Col>
                        <h2 className="font-display">Sneakerz</h2>
                    </Col>
                </Row>
                <Row className="my-5">
                    {showProducts}
                    <BuyModal
                        show={show}
                        setShow={setShow}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    />
                </Row>
            </Container>
        </>
    )
}

export default Products
