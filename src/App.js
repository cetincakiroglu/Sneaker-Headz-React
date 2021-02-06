import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Result from "./Components/Result";
import links from "./Data/links";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));

  return (
    <>
      <BrowserRouter>
        <NavBar
          links={links}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
        />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path="/search">
                  <Result
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                  />
                </Route>
                {routeMaps}
              </Switch>
            </Col>
          </Row>
        </Container>
        <Container>
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
