import { Container, Row, Col } from 'react-bootstrap';

import Hero from '@/components/common/Hero';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import StatCounter from '@/components/common/StatCounter';
import SectionHeading from '@/components/common/SectionHeading';

import { features, stats } from '@/data/home';

import '@/styles/pages/Home.scss';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Bold Digital Experiences That Make An Impact"
        subtitle="We craft stunning websites and memorable brand identities that help businesses thrive in the digital world."
        primaryButtonText="View Our Work"
        primaryButtonLink="/portfolio"
        secondaryButtonText="Get In Touch"
        secondaryButtonLink="/contact"
      />

      <section className="section-padding">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="We combine creativity with technical expertise to deliver outstanding digital solutions"
            centered
          />

          <Row className="gy-4">
            {features.map((feature, index: number) => (
              <Col key={index} lg={4} md={6}>
                <Card hoverable>
                  <div className="feature-icon text-center">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="feature-title text-center">{feature.title}</h3>
                  <p className="feature-description text-center">
                    {feature.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="stats-section section-padding">
        <Container>
          <Row className="gy-4">
            {stats.map((stat, index: number) => (
              <Col key={index} lg={3} md={6}>
                <div className="stat-item text-center">
                  <h2 className="stat-number">
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1}
                    />
                  </h2>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-text">
                Let&apos;s collaborate to bring your vision to life. Get in
                touch with us today to discuss your project requirements.
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Start a Conversation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
