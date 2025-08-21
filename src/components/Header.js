import React, { useState, useEffect } from "react";
import heroBg from "../assets/img/my-profile-img.webp";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("hero"); // Track active navigation item

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle navigation item click
  const handleNavClick = (navId) => {
    setActiveNavItem(navId);
    // Close mobile menu when a link is clicked
    setMenuOpen(false);
  };

  // Set initial active state based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveNavItem(hash);
    }
  }, []);

  // Handle scroll-based navigation updates
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'contact', 'react_js'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNavItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.getElementById('header');
      const toggle = document.querySelector('.header-toggle');
      
      if (menuOpen && header && !header.contains(event.target) && !toggle.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${menuOpen ? "header-show" : ""}`}>
      {/* Mobile menu icon */}
      <i
        className="header-toggle d-xl-none bi bi-list"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      ></i>
      
      <div className="profile-img">
        <img
          src={heroBg}
          alt="Profile"
          className="img-fluid rounded-circle"
        />
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Ravish Yadav</h1>
      </a>

      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav
        id="navmenu"
        className="navmenu"
      >
        <ul>
          <li className={activeNavItem === "hero" ? "current" : ""}>
            <a 
              href="#hero" 
              onClick={() => handleNavClick("hero")}
            >
              <i className="bi bi-house navicon"></i> Home
            </a>
          </li>
          <li className={activeNavItem === "about" ? "current" : ""}>
            <a 
              href="#about" 
              onClick={() => handleNavClick("about")}
            >
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li className={activeNavItem === "resume" ? "current" : ""}>
            <a 
              href="#resume" 
              onClick={() => handleNavClick("resume")}
            >
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li className={activeNavItem === "portfolio" ? "current" : ""}>
            <a 
              href="#portfolio" 
              onClick={() => handleNavClick("portfolio")}
            >
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li className={activeNavItem === "services" ? "current" : ""}>
            <a 
              href="#services" 
              onClick={() => handleNavClick("services")}
            >
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li className={activeNavItem === "contact" ? "current" : ""}>
            <a 
              href="#contact" 
              onClick={() => handleNavClick("contact")}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
          <li className={activeNavItem === "react_js" ? "current" : ""}>
            <a 
              href="#react_js" 
              onClick={() => handleNavClick("react_js")}
            >
              <i className="bi bi-code-slash navicon"></i> React Js
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
