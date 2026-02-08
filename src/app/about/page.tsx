import { Container, Row, Col } from "react-bootstrap";
import MainLayout from "@/components/layout/MainLayout";
import SectionHeading from "@/components/common/SectionHeading";
import Card from "@/components/common/Card";

import "@/styles/pages/About.scss";

export default function AboutPage() {
  const values = [
    {
      title: "Creativity",
      description:
        "We believe in pushing boundaries and thinking outside the box to deliver unique, innovative solutions.",
      icon: "🎨",
    },
    {
      title: "Quality",
      description:
        "Excellence is not an option—it's our standard. We're committed to delivering exceptional work every time.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description:
        "Your success is our success. We work closely with clients to ensure their vision comes to life.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of trends and technologies to provide cutting-edge solutions that give you a competitive edge.",
      icon: "💡",
    },
  ];

  const team = [
    {
      name: "Co-Founder",
      role: "Design & Development",
      description:
        "Passionate about creating beautiful, functional digital experiences with expertise in modern web technologies.",
    },
    {
      name: "Co-Founder",
      role: "Strategy & Development",
      description:
        "Dedicated to building scalable solutions and helping businesses establish strong digital presences.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="about-hero section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="page-title">About LoudLemon Studio</h1>
              <p className="page-subtitle">
                We're a dynamic duo passionate about crafting exceptional web
                experiences and building memorable brands that resonate.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <SectionHeading
                title="Our Story"
                subtitle="Where creativity meets innovation"
              />
            </Col>
            <Col lg={6}>
              <div className="story-content">
                <p>
                  LoudLemon Studio was born from a shared passion for creating
                  digital experiences that make a lasting impact. As friends
                  turned business partners, we combined our expertise in design
                  and development to help businesses stand out in the digital
                  landscape.
                </p>
                <p>
                  We believe that great design should be accessible to
                  businesses of all sizes. That's why we're committed to
                  delivering premium quality work with a personal touch,
                  ensuring every project reflects the unique character of our
                  clients.
                </p>
                <p>
                  Our approach is simple: listen carefully, design thoughtfully,
                  develop skillfully, and deliver excellence. We're not just
                  here to build websites—we're here to help your business thrive
                  online.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />

          <Row className="gy-4">
            {values.map((value, index) => (
              <Col key={index} lg={3} md={6}>
                <Card hoverable>
                  <div className="value-icon text-center">{value.icon}</div>
                  <h3 className="value-title text-center">{value.title}</h3>
                  <p className="value-description text-center">
                    {value.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Meet The Team"
            subtitle="The creative minds behind LoudLemon Studio"
            centered
          />

          <Row className="gy-4 justify-content-center">
            {team.map((member, index) => (
              <Col key={index} lg={5} md={6}>
                <Card>
                  <div className="team-member">
                    <div className="member-avatar">{member.name[0]}</div>
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </MainLayout>
  );
}
