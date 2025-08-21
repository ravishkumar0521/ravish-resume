import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [filteredItems, setFilteredItems] = useState([]);

  const portfolioItems = [
    {
      category: "filter-app",
      img: "assets/img/portfolio/app-1.jpg",
      title: "App 1",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-app",
      zoomTitle: "App 1",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-product",
      img: "assets/img/portfolio/product-1.jpg",
      title: "Product 1",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-product",
      zoomTitle: "Product 1",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-branding",
      img: "assets/img/portfolio/branding-1.jpg",
      title: "Branding 1",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-branding",
      zoomTitle: "Branding 1",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-books",
      img: "assets/img/portfolio/books-1.jpg",
      title: "Books 1",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-book",
      zoomTitle: "Books 1",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-app",
      img: "assets/img/portfolio/app-2.jpg",
      title: "App 2",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-app",
      zoomTitle: "App 2",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-product",
      img: "assets/img/portfolio/product-2.jpg",
      title: "Product 2",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-product",
      zoomTitle: "Product 2",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-branding",
      img: "assets/img/portfolio/branding-2.jpg",
      title: "Branding 2",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-branding",
      zoomTitle: "Branding 2",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-books",
      img: "assets/img/portfolio/books-2.jpg",
      title: "Books 2",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-book",
      zoomTitle: "Books 2",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-app",
      img: "assets/img/portfolio/app-3.jpg",
      title: "App 3",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-app",
      zoomTitle: "App 3",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-product",
      img: "assets/img/portfolio/product-3.jpg",
      title: "Product 3",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-product",
      zoomTitle: "Product 3",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-branding",
      img: "assets/img/portfolio/branding-3.jpg",
      title: "Branding 3",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-branding",
      zoomTitle: "Branding 3",
      link: "portfolio-details.html",
      delay: 200,
    },
    {
      category: "filter-books",
      img: "assets/img/portfolio/books-3.jpg",
      title: "Books 3",
      desc: "Lorem ipsum, dolor sit amet consectetur",
      gallery: "portfolio-gallery-book",
      zoomTitle: "Books 3",
      link: "portfolio-details.html",
      delay: 200,
    },
  ];

  // Filter items based on active filter
  useEffect(() => {
    if (activeFilter === '*') {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => item.category === activeFilter);
      setFilteredItems(filtered);
    }
  }, [activeFilter]);

  // Handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Initialize GLightbox for image gallery
  useEffect(() => {
    // Check if GLightbox is available
    if (typeof window !== 'undefined' && window.GLightbox) {
      const lightbox = window.GLightbox({
        selector: '.glightbox'
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
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
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
              className={activeFilter === '*' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('*')}
              style={{ cursor: 'pointer' }}
            >
              All
            </li>
            <li 
              className={activeFilter === 'filter-app' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-app')}
              style={{ cursor: 'pointer' }}
            >
              App
            </li>
            <li 
              className={activeFilter === 'filter-product' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-product')}
              style={{ cursor: 'pointer' }}
            >
              Product
            </li>
            <li 
              className={activeFilter === 'filter-branding' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-branding')}
              style={{ cursor: 'pointer' }}
            >
              Branding
            </li>
            <li 
              className={activeFilter === 'filter-books' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-books')}
              style={{ cursor: 'pointer' }}
            >
              Books
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
                      title="More Details"
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