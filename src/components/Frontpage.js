import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import heroBg from "../assets/img/hero-bg.png";
import profileImg from "../assets/img/my-profile-img.webp";

import Stats from "./Stats";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import Reactjs from "./Reactjs";


const Frontpage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Initialize Typed.js
    const typed = new Typed(".typed", {
      strings: ["React.js Developer", "WordPress Developer", "Full-Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
}, []);


useEffect(() => {
  const headerToggleBtn = document.querySelector('.header-toggle');
  if (headerToggleBtn) {
    
    headerToggleBtn.addEventListener('click', () => {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    });
  }

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggleBtn.click();
      }
    });
  });

  
}, []);

  return (
      <main className="main">
        {/* banner section */}
        <section id="hero" className="hero section dark-background">
          <img src={heroBg} alt="Hero Background" data-aos="fade-in" />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <h2>Ravish Yadav</h2>
            <p>
              I'm{" "}
              <span
                className="typed"
                style={{ whiteSpace: "pre" }}
              ></span>
            </p>
          </div>
        </section>

        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <ContactSection />
        <Reactjs />
    </main>
  );
}

export default Frontpage;
