import { Container, Row, Col } from 'react-bootstrap';
import SectionHeading from '@/components/common/SectionHeading';
import Card from '@/components/common/Card';

import { values, team } from '@/data/about';

import '@/styles/pages/About.scss';

export default function AboutPage() {
  return (
    <>
      <section className="about-hero section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="page-title">About LoudLemon Studio</h1>
              <p className="page-subtitle">
                We&apos;re a dynamic duo passionate about crafting exceptional
                web experiences and building memorable brands that resonate.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

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
                  LoudLemon Studio was born from a shared passion for building
                  thoughtful, high-quality digital experiences that make a
                  lasting impact. As longtime friends turned business partners,
                  we combined technical expertise and strategic insight to help
                  businesses stand out in the digital landscape.
                </p>
                <p>
                  We believe that great design should be accessible to
                  businesses of all sizes. That&apos;s why we&apos;re committed
                  to delivering solutions that are both reliable and
                  distinctive, ensuring each website and brand reflects the
                  unique character of the business it represents.
                </p>
                <p>
                  Our approach is simple: listen carefully, design thoughtfully,
                  develop skillfully and deliver excellence. We&apos;re not just
                  here to build websites, we&apos;re here to help your business
                  thrive online.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values-section section-padding">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />

          <Row className="gy-4">
            {values.map((value, index: number) => (
              <Col key={index} lg={3} md={6}>
                <Card hoverable>
                  <div className="value-icon text-center">
                    <value.icon size={32} />
                  </div>
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

      <section className="section-padding">
        <Container>
          <SectionHeading
            title="Meet The Team"
            subtitle="The creative minds behind LoudLemon Studio"
            centered
          />

          <Row className="gy-4 justify-content-center">
            {team.map((member, index: number) => (
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
    </>
  );
}
