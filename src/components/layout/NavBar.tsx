'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';

import '@/styles/components/Navbar.scss';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar
      expand="lg"
      className="navbar-custom"
      sticky="top"
      expanded={expanded}
    >
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

        {/* <BSNavbar.Toggle aria-controls="navbar-nav" /> */}

        <BSNavbar.Toggle
          aria-controls="navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/services"
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/portfolio"
              onClick={() => setExpanded(false)}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact"
              className="nav-link-cta"
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavBar;
