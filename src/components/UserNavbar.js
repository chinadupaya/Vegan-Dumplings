import React, {Component} from 'react';
import '../stylesheets/UserNavbar.css'
import {Navbar, Nav, FormControl, Button, Form }from 'react-bootstrap';
import {Bell} from 'react-bootstrap-icons';

export default function UserNavbar(){
    return(
        <div className="UserNavbar">
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/home">SKULTURA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">View All Chats</Nav.Link>
                <Nav.Link href="/chat"></Nav.Link>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <a href="/search"><Button variant="secondary">Search</Button></a>
                </Form>

            </Navbar.Collapse>
            <Nav.Link>
                <Bell size={30}/>
            </Nav.Link>
            </Navbar>
        </div>
    )
}