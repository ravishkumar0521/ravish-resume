import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState([]);

  const portfolioItems = [
    // WordPress Websites
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-1.jpg",
      title: "Torch Dental",
      desc: "WordPress Website • Dental care & practice site",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Torch Dental (WordPress)",
      link: "https://torchdental.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-2.jpg",
      title: "Sorou Division Blog",
      desc: "WordPress Website • Editorial & content blog",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Sorou Division Blog (WordPress)",
      link: "https://www.soroudivision.com/blog/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-3.jpg",
      title: "Golden State Group",
      desc: "WordPress Website • Corporate business website",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Golden State Group (WordPress)",
      link: "https://goldenstategroup.org/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-1.jpg",
      title: "MeterNet USA",
      desc: "WordPress Website • Utility & metering solutions",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "MeterNet USA (WordPress)",
      link: "https://meternetusa.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-2.jpg",
      title: "Cemproof Waterproofing",
      desc: "WordPress Website • Waterproofing & construction services",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Cemproof Waterproofing (WordPress)",
      link: "https://cemproof-waterproofing.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-3.jpg",
      title: "Sherpa Real Estate",
      desc: "WordPress Website • Real estate & property listings",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Sherpa Real Estate (WordPress)",
      link: "https://www.sherparealestate.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/branding-1.jpg",
      title: "Nordic Stem Cell",
      desc: "WordPress Website • Healthcare & stem cell clinic",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Nordic Stem Cell (WordPress)",
      link: "https://nordicstemcell.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/branding-2.jpg",
      title: "Black Projects UP",
      desc: "WordPress Website • Custom projects & brand showcase",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Black Projects UP (WordPress)",
      link: "https://blackprojectsup.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/branding-3.jpg",
      title: "Curve Necessities",
      desc: "WordPress Website • Lifestyle & essentials storefront",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Curve Necessities (WordPress)",
      link: "https://curvenecessities.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/books-1.jpg",
      title: "Little Guy Loans",
      desc: "WordPress Website • Financial & loan service portal",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Little Guy Loans (WordPress)",
      link: "https://littleguyloans.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/books-2.jpg",
      title: "Hassane4 Staging",
      desc: "WordPress Website • Custom theme & staging build",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Hassane4 Staging (WordPress)",
      link: "https://hassane4.sg-host.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/books-3.jpg",
      title: "Dlux Cabinetry",
      desc: "WordPress Website • Custom cabinetry & interior showcase",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Dlux Cabinetry (WordPress)",
      link: "https://dluxcabinetry.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-1.jpg",
      title: "DeskSpot Request",
      desc: "WordPress Website • Workspace inquiry & request portal",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "DeskSpot Request (WordPress)",
      link: "https://request.deskspot.in/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-2.jpg",
      title: "Maintak Corp",
      desc: "WordPress / Storefront • Commerce & product catalog",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Maintak Corp (WordPress)",
      link: "https://maintak-corp.myshopify.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/app-3.jpg",
      title: "Park Lane Plumbing",
      desc: "WordPress Website • Local plumbing & service booking",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Park Lane Plumbing (WordPress)",
      link: "https://parklaneplumbing.ca/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-1.jpg",
      title: "Moghra",
      desc: "WordPress Website • Brand & business website",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Moghra (WordPress)",
      link: "http://moghra.ie/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-2.jpg",
      title: "EdenCann",
      desc: "WordPress Website • Specialty wellness & product site",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "EdenCann (WordPress)",
      link: "https://edencann.com/",
    },
    {
      category: "filter-wordpress",
      img: "assets/img/portfolio/product-3.jpg",
      title: "ZippyVote",
      desc: "WordPress Website • Digital voting & platform site",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "ZippyVote (WordPress)",
      link: "https://zippyvote.com/",
    },

    // Webflow
    {
      category: "filter-webflow",
      img: "assets/img/portfolio/branding-1.jpg",
      title: "ArtsDAO",
      desc: "Webflow • Interactive creative & art community site",
      gallery: "portfolio-gallery-webflow",
      zoomTitle: "ArtsDAO (Webflow)",
      link: "https://artsdao.webflow.io/",
    },

    // WordPress Gutenberg
    {
      category: "filter-gutenberg",
      img: "assets/img/portfolio/books-1.jpg",
      title: "Colonna Law Firm",
      desc: "WordPress Gutenberg • Block-based legal practice site",
      gallery: "portfolio-gallery-gutenberg",
      zoomTitle: "Colonna Law Firm (WordPress Gutenberg)",
      link: "https://www.colonnalawfirm.com/",
    },

    // Shopify
    {
      category: "filter-shopify",
      img: "assets/img/portfolio/branding-2.jpg",
      title: "Covrd Shop",
      desc: "Shopify • Custom e-commerce storefront",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Covrd Shop (Shopify)",
      link: "https://covrd.shop/",
    },
    {
      category: "filter-shopify",
      img: "assets/img/portfolio/branding-3.jpg",
      title: "Anfa Store",
      desc: "Shopify • Online retail & product store",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Anfa Store (Shopify)",
      link: "https://anfastore.nl/",
    },
    {
      category: "filter-shopify",
      img: "assets/img/portfolio/books-2.jpg",
      title: "Zasta Studio",
      desc: "Shopify • Studio & e-commerce storefront",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Zasta Studio (Shopify)",
      link: "https://zastastudio.com/",
    },
  ];

  // Filter items based on active filter
  useEffect(() => {
    if (activeFilter === "*") {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(filtered);
    }
  }, [activeFilter]);

  // Handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Initialize GLightbox for image gallery
  useEffect(() => {
    if (typeof window !== "undefined" && window.GLightbox) {
      const lightbox = window.GLightbox({
        selector: ".glightbox",
      });

      return () => {
        if (lightbox) {
          lightbox.destroy();
        }
      };
    }
  }, [filteredItems]);

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Selected websites and e-commerce stores built across WordPress,
          WordPress Gutenberg, Shopify, and Webflow with responsive layouts and
          clean performance.
        </p>
      </div>

      <Container>
        <div className="isotope-layout">
          {/* Filters */}
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li
              className={activeFilter === "*" ? "filter-active" : ""}
              onClick={() => handleFilterClick("*")}
              style={{ cursor: "pointer" }}
            >
              All
            </li>
            <li
              className={activeFilter === "filter-wordpress" ? "filter-active" : ""}
              onClick={() => handleFilterClick("filter-wordpress")}
              style={{ cursor: "pointer" }}
            >
              WordPress
            </li>
            <li
              className={activeFilter === "filter-shopify" ? "filter-active" : ""}
              onClick={() => handleFilterClick("filter-shopify")}
              style={{ cursor: "pointer" }}
            >
              Shopify
            </li>
            <li
              className={activeFilter === "filter-webflow" ? "filter-active" : ""}
              onClick={() => handleFilterClick("filter-webflow")}
              style={{ cursor: "pointer" }}
            >
              Webflow
            </li>
            <li
              className={activeFilter === "filter-gutenberg" ? "filter-active" : ""}
              onClick={() => handleFilterClick("filter-gutenberg")}
              style={{ cursor: "pointer" }}
            >
              Gutenberg
            </li>
          </ul>

          {/* Portfolio Items */}
          <Row
            className="gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredItems.map((item, index) => (
              <Col
                key={index}
                lg={4}
                md={6}
                className="portfolio-item isotope-item"
              >
                <div className="portfolio-content h-100">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <a
                      href={item.img}
                      title={item.zoomTitle}
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Live Website"
                      className="details-link"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;