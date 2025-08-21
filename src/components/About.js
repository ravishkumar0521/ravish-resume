import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Updated profile image
import profileImg from "../assets/img/my-profile-img.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Passionate React.js and WordPress developer with expertise in creating modern, 
          responsive web applications and custom WordPress solutions. Dedicated to delivering 
          exceptional user experiences through clean code and innovative design.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <div className="profile-image-container">
              <div className="profile-background">
                <img src={profileImg} className="img-fluid rounded profile-img" alt="Profile" />
              </div>
            </div>
          </div>

          <div className="col-lg-8 content">
            <h2>React.js & WordPress Developer</h2>
            <p className="fst-italic py-3">
              Experienced full-stack developer specializing in React.js frontend development 
              and WordPress backend solutions. Creating scalable, performant applications 
              that drive business growth and user engagement.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Experience:</strong> <span>5+ Years</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>ravishyadav.dev</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+91 98765 43210</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location:</strong> <span>Mumbai, India</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Projects:</strong> <span>50+ Completed</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>B.Tech Computer Science</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>ravish@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="expertise-section py-3">
              <h4>Core Expertise</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="expertise-item">
                    <h5><i className="bi bi-code-slash"></i> React.js Development</h5>
                    <ul>
                      <li>Modern React with Hooks & Context API</li>
                      <li>Component-based architecture</li>
                      <li>State management (Redux, Zustand)</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="expertise-item">
                    <h5><i className="bi bi-wordpress"></i> WordPress Development</h5>
                    <ul>
                      <li>Custom theme development</li>
                      <li>Plugin development & customization</li>
                      <li>WooCommerce integration</li>
                      <li>WordPress optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="py-3">
              With a strong foundation in both React.js and WordPress development, 
              I create seamless web experiences that combine modern frontend technologies 
              with robust content management systems. My approach focuses on clean, 
              maintainable code, optimal performance, and user-centric design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
