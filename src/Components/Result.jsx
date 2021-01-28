import React,{useState} from 'react'
import {Col, Row, Button, Container} from 'react-bootstrap'

function Result({searchResult}) {
    return (
        <>
        <Container>
            <Row className="mt-5">
            <h2 className="font-display">Search Results</h2>
            </Row>
            <Row>
                {searchResult}
            </Row>
        </Container>
        </>
    )
}

export default Result
