import Link from "next/link";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

import "@/styles/components/Navbar.scss";

const NavBar = () => {
  return (
    <BSNavbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Link href="/" passHref>
          <BSNavbar.Brand className="brand-logo">
            <span className="brand-text">Loud</span>
            <span className="brand-text-accent">Lemon</span>
          </BSNavbar.Brand>
        </Link>

        <BSNavbar.Toggle aria-controls="navbar-nav" />

        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>

            <Link href="/services" passHref>
              <Nav.Link>Services</Nav.Link>
            </Link>

            <Link href="/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>

            <Link href="/contact" passHref>
              <Nav.Link className="nav-link-cta">Contact Us</Nav.Link>
            </Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavBar;
