import { Metadata } from 'next';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '@/components/common/Card';
import ContactForm from '@/components/forms/ContactForm';
import SectionHeading from '@/components/common/SectionHeading';

import { contactMethods } from '@/data/contact';

import '@/styles/pages/Contact.scss';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with LoudLemon Studio to discuss web design, branding or digital strategy for your business.',
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="page-title">Get In Touch</h1>
              <p className="page-subtitle">
                Have a project in mind or just want to say hello? We&apos;d love
                to hear from you. Fill out the form below or reach out directly.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-methods section-padding-sm">
        <Container>
          <Row className="gy-4">
            {contactMethods.map((method, index) => (
              <Col key={index} lg={4} md={6}>
                <a
                  href={method.link}
                  className="contact-method-link text-decoration-none"
                >
                  <Card hoverable>
                    <div className="contact-method text-center">
                      <div className="method-icon">
                        <method.icon size={32} />
                      </div>
                      <h3 className="method-title">{method.title}</h3>
                      <p className="method-description">{method.description}</p>
                      <p className="method-info">{method.info}</p>
                    </div>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
                centered
              />

              <div className="form-wrapper">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq-section section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Quick answers to common questions"
                centered
              />

              <div className="faq-list">
                <div className="faq-item">
                  <h3 className="faq-question">
                    What is your typical project timeline?
                  </h3>
                  <p className="faq-answer">
                    Project timelines vary based on scope and complexity.
                    Typically, a standard website takes 4-8 weeks from initial
                    consultation to launch. We&apos;ll provide a detailed
                    timeline during our discovery phase.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">
                    Do you offer ongoing support after launch?
                  </h3>
                  <p className="faq-answer">
                    Yes! We offer maintenance and support packages to keep your
                    website running smoothly, secure, and up-to-date. We&apos;re
                    here for you long after launch.
                  </p>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What is your pricing model?</h3>
                  <p className="faq-answer">
                    Each project is unique, so we provide custom quotes based on
                    your specific requirements. Contact us to discuss your
                    project and receive a detailed proposal.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
