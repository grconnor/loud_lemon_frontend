'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'motion/react';

import Button from '@/components/common/Button';

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
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {subtitle}
              </motion.p>

              {(primaryButtonText || secondaryButtonText) && (
                <motion.div
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
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
                </motion.div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
