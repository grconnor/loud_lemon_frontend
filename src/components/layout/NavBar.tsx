"use client";

import Link from "next/link";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";

import "@/styles/components/Navbar.scss";
import Image from "next/image";

const NavBar = () => {
  return (
    <BSNavbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} href="/" className="brand-logo">
          <Image
            src="/images/LoudLemon-transparent.png"
            alt="loudlemon-logo"
            width={180}
            height={48}
            priority
          />
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="navbar-nav" />

        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" className="nav-link-cta">
              Contact Us
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavBar;
