import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import "@/styles/components/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span className="brand-text">Loud</span>
                <span className="brand-text-accent">Lemon</span>
              </h3>
              <p className="footer-description">
                Creating bold, vibrant web experiences and memorable brand
                identities that help businesses stand out.
              </p>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <div className="footer-section">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-section">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                <li>
                  <Link href="/services">Web Design</Link>
                </li>
                <li>
                  <Link href="/services">Web Development</Link>
                </li>
                <li>
                  <Link href="/services">Brand Identity</Link>
                </li>
                <li>
                  <Link href="/services">UI/UX Design</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-section">
              <h5 className="footer-title">Get In Touch</h5>
              <div className="footer-contact">
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:hello@loudlemonstudio.com">
                    hello@loudlemonstudio.com
                  </a>
                </p>
                <Link href="/contact" className="btn btn-primary btn-sm mt-3">
                  Contact Us
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col md={6}>
            <p className="footer-copyright">
              &copy; {currentYear} LoudLemon Studio. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="footer-legal">
              <Link href="/privacy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
