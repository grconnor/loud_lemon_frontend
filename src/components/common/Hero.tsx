import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button';

import '@/styles/components/Hero.scss';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="hero-content text-center">
              <h1 className="hero-title">{title}</h1>
              <p className="hero-subtitle">{subtitle}</p>

              {(primaryButtonText || secondaryButtonText) && (
                <div className="hero-buttons">
                  {primaryButtonText && (
                    <Button
                      variant="primary"
                      size="lg"
                      href={primaryButtonLink}
                      className="me-3 primary-hero-button"
                    >
                      {primaryButtonText}
                    </Button>
                  )}

                  {secondaryButtonText && (
                    <Button
                      variant="outline-secondary"
                      size="lg"
                      href={secondaryButtonLink}
                      className="secondary-hero-button"
                    >
                      {secondaryButtonText}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
