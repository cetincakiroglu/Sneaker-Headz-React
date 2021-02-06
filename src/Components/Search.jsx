import React, { useRef, useState, useEffect } from "react";
import { Form, FormControl, Button, Card, Col } from "react-bootstrap";
import { useHistory, useLocation, Link } from "react-router-dom";
import products from "../Data/productData.json";

function Search({ searchResult, setSearchResult }) {
  const searchIcon = [
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="search"
      class="svg-inline--fa fa-search fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      ></path>
    </svg>
  ];

  const history = useHistory();
  const location = useLocation();
  const searchInput = useRef();

  const params = new URLSearchParams(location.search);
  const q = params.get("q");

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search/search?q=${searchInput.current.value}`);
  }

  useEffect(() => {
    if (q) {
      searchInput.current.value = q ? q : "";

      const productSearch = products.results
        .filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
        .map((item) => (
          <Col sm={4} key={item.id} className="mt-3">
            <Link to={`/ProductDetails/${item.id}`}>
              <Card>
                <Card.Img variant="top" src={item.src[0]} />
                <Card.Body className="text-dark text-center">
                  <Card.Title className="font-secondary">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="font-secondary">
                    {item.detail}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ));
      setSearchResult(productSearch);
    }
  }, [q]);
  return (
    <>
      <Form onSubmit={handleSubmit} inline>
        <FormControl
          htmlFor="search"
          type="text"
          id="search"
          placeholder="Search sneakerzzz"
          className=""
          ref={searchInput}
          name={q}
        />
        <Button
          type="submit"
          id="searchBtn"
          onClick={handleSubmit}
          className="font-secondary"
        >
          {searchIcon}
        </Button>
      </Form>
    </>
  );
}

export default Search;
