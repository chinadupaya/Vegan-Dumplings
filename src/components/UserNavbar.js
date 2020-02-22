import React, {Component} from 'react';
import {Navbar, Nav }from 'react-bootstrap';

export default function UserNavbar(){
    return(
        <div className="UserNavbar">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Skultura</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">View Convos</Nav.Link>
            </Nav>

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}