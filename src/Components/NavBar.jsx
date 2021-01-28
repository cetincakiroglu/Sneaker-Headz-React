import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import Search from './Search'

function NavBar({ searchResult, setSearchResult, links }) {
    function searchParams(query) {
        console.log(query);
    }
    const navItems = links
        .filter(item => item.isLink)
        .map((item, index) => (
            <Nav.Link className="nav-link" key={index}>
                <Link to={item.link}>{item.title}</Link>
            </Nav.Link>
        ))

    return (
        <>
            <Navbar id='nav' className="py-0 my-0" variant="dark">
                <Navbar.Brand  >
                    <Link id="logo" to='/'>Sneaker Headz</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {navItems}
                </Nav>
                <Search
                    searchResult={searchResult}
                    setSearchResult={setSearchResult}
                />
            </Navbar>

        </>
    )
}

export default NavBar
