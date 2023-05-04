import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold" href="#home">
            FlamingFork
          </Navbar.Brand>
          <Nav className="mx-auto d-flex justify-content-center align-items-center gap-2">
            <NavLink className="text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none" to="/blog">
              Blog
            </NavLink>
          </Nav>
          <Nav>
            {user && (
              <FaUserCircle title="sajib" style={{ fontSize: "2.5rem" }}></FaUserCircle>
            )}

            {user ? (
              <Button onClick={handleLogOut} variant="danger">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
