import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap'
import Search from './Search'

function NavBar() {
    
    
    return (
       <>
       <Navbar id='nav' className="py-0 my-0" variant="dark">
           <Navbar.Brand  >
            <Link id="logo" to='/Home'>Sneaker Headz</Link>
            </Navbar.Brand>
           <Nav className="mr-auto">
               <Nav.Link className="nav-link">
                   <Link to='/Home'>Home</Link>
                </Nav.Link>
               <Nav.Link className="nav-link">
                   <Link to ='/Products'>Sneakers</Link>
                </Nav.Link>
               <Nav.Link className="nav-link">
                   <Link to ='/About'>About</Link>
                </Nav.Link>
               <Nav.Link className="nav-link">
                   <Link to ='/Contact'>Contact</Link>
                </Nav.Link>
           </Nav>
           <Search 
            
            />
       </Navbar>
       
       </>
    )
}

export default NavBar
