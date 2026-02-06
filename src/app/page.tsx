import { Container, Row, Col } from "react-bootstrap";
import MainLayout from "@/components/layout/MainLayout";
// import Hero from "@/components/common/Hero";
// import SectionHeading from "@/components/common/SectionHeading";
// import Card from "@/components/common/Card";
// import Button from "@/components/common/Button";
import "@/styles/pages/Home.scss";

export default function HomePage() {
  const features = [
    {
      title: "Web Design",
      description:
        "Beautiful, modern websites that captivate your audience and deliver exceptional user experiences.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description:
        "Robust, scalable web applications built with cutting-edge technologies and best practices.",
      icon: "💻",
    },
    {
      title: "Brand Identity",
      description:
        "Distinctive brand identities that make your business memorable and stand out from competitors.",
      icon: "✨",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "40+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <MainLayout>
      <section className="section-padding">
        <Container>
          <Row className="gy-4">
            {features.map((feature, index) => (
              <Col key={index} lg={4} md={6}>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="stats-section section-padding">
        <Container>
          <Row className="gy-4">
            {stats.map((stat, index) => (
              <Col key={index} lg={3} md={6}>
                <div className="stat-item text-center">
                  <h2 className="stat-number">{stat.number}</h2>
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
                Let&apos;s collaborate to bring your vision to life. Get in touch
                with us today to discuss your project requirements.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </MainLayout>
  );
}
