import React from "react";

const Services = () => {
  const servicesData = [
    {
      icon: "bi bi-wordpress",
      title: "Custom WordPress Themes",
      link: "#",
      description:
        "Professional, responsive WordPress themes built from scratch or customized to match your brand identity and business requirements.",
      delay: 100,
    },
    {
      icon: "bi bi-gear",
      title: "Plugin Development",
      link: "#",
      description:
        "Custom WordPress plugins and functionality tailored to your specific needs, ensuring seamless integration and optimal performance.",
      delay: 200,
    },
    {
      icon: "bi bi-bag",
      title: "Shopify Development",
      link: "#",
      description:
        "Custom Shopify stores, theme customization, app integration, payment gateways, and optimized checkout for higher conversions.",
      delay: 300,
    },
    {
      icon: "bi bi-phone",
      title: "Responsive Design",
      link: "#",
      description:
        "Mobile-first responsive design ensuring your website looks and functions perfectly across all devices and screen sizes.",
      delay: 400,
    },
    {
      icon: "bi bi-speedometer2",
      title: "Performance Optimization",
      link: "#",
      description:
        "Website speed optimization, Core Web Vitals improvement, caching implementation, and SEO best practices for better rankings.",
      delay: 500,
    },
    {
      icon: "bi bi-shield-check",
      title: "Maintenance & Support",
      link: "#",
      description:
        "Ongoing website maintenance, security updates, backups, troubleshooting, and technical support to keep your site running smoothly.",
      delay: 600,
    },
    {
      icon: "bi bi-code-slash",
      title: "React.js Development",
      link: "#",
      description:
        "Modern React applications with hooks, context API, and responsive design. Single-page applications, component libraries, and API integration.",
      delay: 700,
    },
    {
      icon: "bi bi-layout-text-window",
      title: "Webflow Development",
      link: "#",
      description:
        "Custom Webflow websites with advanced animations, interactions, and CMS integration. Responsive design and custom functionality development.",
      delay: 800,
    },
    {
      icon: "bi bi-window",
      title: "Wix Development",
      link: "#",
      description:
        "Professional Wix websites with custom design, advanced features, and e-commerce integration. Mobile-optimized and SEO-friendly solutions.",
      delay: 900,
    },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Professional WordPress development services tailored to your business needs. 
          From custom themes to e-commerce solutions, I deliver high-quality, 
          responsive websites that drive results.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="icon flex-shrink-0">
                <i className={service.icon}></i>
              </div>
              <div>
                <h4 className="title">
                  {service.title}
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
