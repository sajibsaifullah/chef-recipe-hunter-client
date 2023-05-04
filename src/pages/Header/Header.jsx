import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold" href="#home">FlamingFork</Navbar.Brand>
          <Nav className="mx-auto d-flex justify-content-center align-items-center gap-2">
            <NavLink className="text-decoration-none" to='/'>Home</NavLink>
            <NavLink className="text-decoration-none" to='/'>Blog</NavLink>
          </Nav>
          <Link to='/login'><Button variant="primary">Login</Button></Link>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
