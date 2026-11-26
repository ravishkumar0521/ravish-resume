import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState([]);

  const portfolioItems = [
    // WordPress Websites
    {
      category: "filter-wordpress",
      img: `${process.env.PUBLIC_URL}/images/Save-on-Dental-Supplies-Compare-Vendors-in-One-Cart-Torch-11-21-2026_04_23_AM.png`,
      title: "Torch Dental",
      desc: "WordPress Website • Dental supply & procurement platform",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Torch Dental (WordPress)",
      link: "https://torchdental.com/",
    },
    {
      category: "filter-wordpress",
      img: `${process.env.PUBLIC_URL}/images/Your-Guide-to-Pagosa-Springs-Real-Estate-11-21-2026_04_30_AM.png`,
      title: "Sherpa Real Estate",
      desc: "WordPress Website • Pagosa Springs real estate & property listings",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Sherpa Real Estate (WordPress)",
      link: "https://www.sherparealestate.com/",
    },
    {
      category: "filter-wordpress",
      img: `${process.env.PUBLIC_URL}/images/Moghra-11-21-2026_05_04_AM.png`,
      title: "Moghra",
      desc: "WordPress Website • Irish headwear & e-commerce brand",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "Moghra (WordPress)",
      link: "http://moghra.ie/",
    },
    {
      category: "filter-wordpress",
      img: `${process.env.PUBLIC_URL}/images/Screenshot_9.png`,
      title: "ZippyVote",
      desc: "WordPress Website • Online talent & video contest voting platform",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "ZippyVote (WordPress)",
      link: "https://zippyvote.com/",
    },
    {
      category: "filter-wordpress",
      img: `${process.env.PUBLIC_URL}/images/About-OnCampus-College-Planning-11-21-2026_04_19_AM.png`,
      title: "OnCampus College Planning",
      desc: "WordPress Website • Education consulting & ACT prep services",
      gallery: "portfolio-gallery-wordpress",
      zoomTitle: "OnCampus College Planning (WordPress)",
      link: "https://oncampuscollegeplanning.com/",
    },

    // Shopify Stores
    {
      category: "filter-shopify",
      img: `${process.env.PUBLIC_URL}/images/Screenshot_12.png`,
      title: "Covrd Shop",
      desc: "Shopify • Trading card accessories & e-commerce store",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Covrd Shop (Shopify)",
      link: "https://covrd.shop/",
    },
    {
      category: "filter-shopify",
      img: `${process.env.PUBLIC_URL}/images/AYFstore-11-21-2026_04_55_AM.png`,
      title: "Anfa Store",
      desc: "Shopify • Smart tech gadgets & mobile accessories store",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Anfa Store (Shopify)",
      link: "https://anfastore.nl/",
    },
    {
      category: "filter-shopify",
      img: `${process.env.PUBLIC_URL}/images/ZastaStudio-artistry-in-motion-11-21-2026_04_59_AM.png`,
      title: "Zasta Studio",
      desc: "Shopify • Contemporary fashion, leather & footwear storefront",
      gallery: "portfolio-gallery-shopify",
      zoomTitle: "Zasta Studio (Shopify)",
      link: "https://zastastudio.com/",
    },

    // Webflow
    {
      category: "filter-webflow",
      img: `${process.env.PUBLIC_URL}/images/Arts-DAO-A-curated-membership-community-pioneering-internet-culture-11-21-2026_04_48_AM.png`,
      title: "ArtsDAO",
      desc: "Webflow • Curated web3 & internet culture membership community",
      gallery: "portfolio-gallery-webflow",
      zoomTitle: "ArtsDAO (Webflow)",
      link: "https://artsdao.webflow.io/",
    },

    // WordPress Gutenberg
    {
      category: "filter-gutenberg",
      img: `${process.env.PUBLIC_URL}/images/Criminal-Defense-Family-Law-Attorney-Lake-Charles-LA-Jacob-Colonna-Colonna-Law-Firm-11-21-2026_04_38_AM.png`,
      title: "Colonna Law Firm",
      desc: "WordPress Gutenberg • Block-based legal & attorney website",
      gallery: "portfolio-gallery-gutenberg",
      zoomTitle: "Colonna Law Firm (WordPress Gutenberg)",
      link: "https://www.colonnalawfirm.com/",
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
              className={
                activeFilter === "filter-wordpress" ? "filter-active" : ""
              }
              onClick={() => handleFilterClick("filter-wordpress")}
              style={{ cursor: "pointer" }}
            >
              WordPress
            </li>
            <li
              className={
                activeFilter === "filter-shopify" ? "filter-active" : ""
              }
              onClick={() => handleFilterClick("filter-shopify")}
              style={{ cursor: "pointer" }}
            >
              Shopify
            </li>
            <li
              className={
                activeFilter === "filter-webflow" ? "filter-active" : ""
              }
              onClick={() => handleFilterClick("filter-webflow")}
              style={{ cursor: "pointer" }}
            >
              Webflow
            </li>
            <li
              className={
                activeFilter === "filter-gutenberg" ? "filter-active" : ""
              }
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
