import { Metadata } from 'next';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '@/components/common/Card';
import SectionHeading from '@/components/common/SectionHeading';

import { projects } from '@/data/portfolio';

import '@/styles/pages/Portfolio.scss';
import PageHero from '@/components/common/PageHero';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'View selected web design and branding projects by LoudLemon Studio.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Explore our latest projects and see how we've helped businesses create exceptional digital experiences."
      />

      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Featured Work"
            subtitle="A showcase of our best projects across web design, development, and branding"
            centered
          />

          <Row className="gy-4">
            {projects.map((project, index: number) => (
              <Col key={index} lg={4} md={6}>
                <Card
                  image={project.image}
                  imageAlt={project.title}
                  hoverable
                  className="portfolio-card"
                >
                  <div className="portfolio-category">{project.category}</div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="portfolio-cta section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="cta-title">Like What You See?</h2>
              <p className="cta-text">
                Let&apos;s work together to create something amazing for your
                business. Contact us to get started on your project today.
              </p>
              <a
                href="/contact"
                className="btn btn-primary btn-lg custom-button"
              >
                Start Your Project
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
