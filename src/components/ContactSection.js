import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Feel free to reach out for WordPress, Shopify, or Webflow projects,
          website maintenance, or freelance collaborations.
        </p>
      </div>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="justify-content-center">
          <Col lg={7} md={9}>
            <div
              className="info-wrap p-4 p-md-5 rounded-4 shadow-sm"
              style={{ backgroundColor: "#040b14", color: "#ffffff" }}
            >
              <h3 className="text-white mb-2">Contact Information</h3>
              <p className="text-white-50 mb-4">
                Available for freelance projects and ongoing support. Connect
                directly via phone or email.
              </p>

              <div
                className="info-item d-flex align-items-start mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="text-white mb-1">Address</h4>
                  <p className="mb-0 text-white-50">
                    Village-Shyomai, Post-Jajumai, Dist-Firozabad, Uttar
                    Pradesh, India
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex align-items-start mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-telephone flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="text-white mb-1">Call Us</h4>
                  <p className="mb-0">
                    <a
                      href="tel:+918859102835"
                      className="text-white-50 text-decoration-none"
                    >
                      +91 8859102835
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex align-items-start"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="text-white mb-1">Email Us</h4>
                  <p className="mb-0">
                    <a
                      href="mailto:ravishkumar0521@gmail.com"
                      className="text-white-50 text-decoration-none"
                    >
                      ravishkumar0521@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;