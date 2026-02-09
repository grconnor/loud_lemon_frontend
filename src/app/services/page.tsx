import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "@/components/common/SectionHeading";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

import { services, process, ServiceItem, ProcessStep } from "@/data/services";

import "@/styles/pages/Services.scss";

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="page-title">Our Services</h1>
              <p className="page-subtitle">
                Full-service digital solutions crafted to elevate your brand,
                engage your audience and drive real business growth.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading
            title="What We Offer"
            subtitle="End-to-end digital services to bring your vision to life"
            centered
          />

          <Row className="gy-4">
            {services.map((service: ServiceItem, index: number) => {
              return (
                <Col key={index} lg={4} md={6}>
                  <Card hoverable className="service-card h-100">
                    <div className="service-icon">
                      <service.icon size={32} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="process-section section-padding">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="A streamlined approach to delivering exceptional results"
            centered
          />

          <Row className="gy-4">
            {process.map((item: ProcessStep, index: number) => (
              <Col key={index} lg={4} md={6}>
                <div className="process-item">
                  <div className="process-step">{item.step}</div>
                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-description">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="services-cta section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="cta-title">Let&apos;s Build Something Amazing</h2>
              <p className="cta-text">
                Ready to take your digital presence to the next level? Get in
                touch with us to discuss your project.
              </p>
              <Button variant="primary" size="lg" href="/contact">
                Get Started Today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
