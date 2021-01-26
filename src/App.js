import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import ProductDetails from './Components/Product/ProductDetails'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import Search from './Components/Search'

function App() {
 
  
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Container>
      <Row>
       
         <Col>
            <Switch>
                <Route path='/Home'>
                  <Home />
                </Route>
                <Route path='/Products'>
                  <Products />
                </Route>
                <Route path='/ProductDetails/:id' >
                  <ProductDetails/>
                </Route>
                <Route path='/About'>
                  <About />
                </Route>
                <Route path='/Contact'>
                  <Contact />
                </Route>
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
