import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="/about#skillsSection">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='logo' />
                <div className="contactBtn">
                    <Button
                        variant='outline-secondary'>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;