'use client';

import { motion } from 'motion/react';
import { Container, Row, Col } from 'react-bootstrap';

import '@/styles/components/PageHero.scss';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="page-hero section-padding">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h1 className="page-title">{title}</h1>
            <p className="page-subtitle">{subtitle}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHero;
