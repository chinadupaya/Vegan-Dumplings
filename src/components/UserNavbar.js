import React, {Component} from 'react';
import '../stylesheets/UserNavbar.css'
import {Navbar, Nav, FormControl, Button, Form }from 'react-bootstrap';
import {Bell} from 'react-bootstrap-icons';

export default function UserNavbar(){
    return(
        <div className="UserNavbar">
            <Navbar className="custom-nav" variant="dark" expand="lg">
            <Navbar.Brand href="/home"><b>S</b>KULTURA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Channels</Nav.Link>
                <Nav.Link href="/chat"></Nav.Link>
                <Nav.Link href="/search">Network</Nav.Link>
            </Nav>

            </Navbar.Collapse>
            <Nav.Link>
                <Bell size={30}/>
            </Nav.Link>
            </Navbar>
        </div>
    )
}