import { Metadata } from 'next';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '@/components/common/Card';
import PageHero from '@/components/common/PageHero';
import ContactForm from '@/components/forms/ContactForm';
import SectionHeading from '@/components/common/SectionHeading';

import { contactMethods } from '@/data/contact';
import { FAQS } from '@/data/faq';

import '@/styles/pages/Contact.scss';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with LoudLemon Studio to discuss web design, branding or digital strategy for your business.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out directly."
      />

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
                {FAQS.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
