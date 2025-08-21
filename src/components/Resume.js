import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          WordPress/PHP Developer specializing in custom themes, plugins, and
          WooCommerce. I build performant, secure, and SEO‑friendly websites with
          clean, maintainable code and a strong focus on user experience.
        </p>
        {/* <button
          type="button"
          className="btn btn-primary btn-sm d-print-none"
          onClick={() => window.print()}
          aria-label="Download resume as PDF"
        >
          Download PDF
        </button> */}
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Ravish Kumar</h4>
              <p>
                <em>
                  WordPress/PHP developer with hands-on experience building and maintaining
                  responsive websites and e‑commerce solutions. Focused on quality, client
                  collaboration, and timely delivery.
                </em>
              </p>
              <ul>
                <li>Vill-Shyomai, Post-Jajumai, Distt. Firozabad, U.P</li>
                <li>+91 8859102835</li>
                <li>ravishkumar0521@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Diploma (Computer Engineering)</h4>
              <h5>2018</h5>
              <p>
                <em>SETH JAI PARKASH POLYTECHNIC, DAMLA, YAMUNANAGAR</em>
              </p>
              <p>Board: H.S.B.T.E — Percentage: 80%</p>
            </div>

            <div className="resume-item">
              <h4>B.Sc</h4>
              <h5>2015</h5>
              <p>
                <em>Chaudhary Nath Singh Yadav Mahavidyalaya, Dhibul Baranhal (U.P.)</em>
              </p>
              <p>Board: U.P. Board Allahabad — Percentage: 60%</p>
            </div>

            <div className="resume-item">
              <h4>12th Class</h4>
              <h5>2012</h5>
              <p>
                <em>Narayan Inter College, Shikohabad, Firozabad (U.P.)</em>
              </p>
              <p>Board: U.P. Board Allahabad — Percentage: 50%</p>
            </div>

            <div className="resume-item">
              <h4>10th Class</h4>
              <h5>2010</h5>
              <p>
                <em>Shri N.S.R.B.H.S.S., Fatehpur, Firozabad (U.P.)</em>
              </p>
              <p>Board: U.P. Board Allahabad — Percentage: 50%</p>
            </div>

            <h3 className="resume-title">Key Skills</h3>
            <div className="resume-item">
              <ul>
                <li>WordPress, WooCommerce, Custom Themes &amp; Plugins</li>
                <li>PHP, MySQL, REST APIs</li>
                <li>HTML5, CSS3, JavaScript, jQuery, Bootstrap</li>
                <li>Shopify, SEO</li>
                <li>Git, cPanel/Hosting</li>
              </ul>
            </div>

            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <ul>
                <li><a href="https://hipzone.in/" target="_blank" rel="noreferrer">hipzone.in</a></li>
                <li><a href="https://dreamdressforless.ca/" target="_blank" rel="noreferrer">dreamdressforless.ca</a></li>
                <li><a href="https://fordsiwal.com/" target="_blank" rel="noreferrer">fordsiwal.com</a></li>
                <li><a href="https://pragtigarage.com/" target="_blank" rel="noreferrer">pragtigarage.com</a></li>
                <li><a href="http://amelianoee.com/" target="_blank" rel="noreferrer">amelianoee.com</a></li>
                <li><a href="https://neckloveper.com/" target="_blank" rel="noreferrer">neckloveper.com</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Additional project links available on request</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Personal Details</h3>
            <div className="resume-item">
              <ul>
                <li>Father's Name: Mr. Rajesh Kumar</li>
                <li>Date of Birth: 21/05/1994</li>
                <li>Marital Status: Unmarried</li>
                <li>Languages: Hindi, English</li>
                <li>Gender: Male</li>
                <li>Nationality: Indian</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Brinnam Rai's E-Bizz Private Limited</h4>
              <h5>01/Aug/2018 – 30/May/2019</h5>
              <p>Web Developer (WordPress/PHP)</p>
              <ul>
                <li>Built and customized WordPress themes and child themes.</li>
                <li>Developed PHP templates, CPTs, and reusable shortcodes.</li>
                <li>Handled hosting setup, DNS/SSL, and site migrations.</li>
                <li>Maintained sites, fixed bugs, and improved load speed.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Crosscage Digiworld Private Limited</h4>
              <h5>19/Jun/2019 – 15/Jan/2020</h5>
              <p>Web Developer (WordPress/PHP)</p>
              <ul>
                <li>Delivered marketing and e‑commerce sites on WordPress/WooCommerce.</li>
                <li>Created custom plugins and shortcodes for dynamic content.</li>
                <li>Integrated payment gateways and shipping providers.</li>
                <li>Collaborated with designers and content teams to meet deadlines.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Itorics Pvt. Ltd.</h4>
              <h5>15/Jan/2020 – 10/Jan/2021</h5>
              <p>Web Developer (WordPress/PHP)</p>
              <ul>
                <li>Implemented multi‑language sites and custom admin options.</li>
                <li>Consumed REST APIs and integrated third‑party services.</li>
                <li>Applied SEO best practices, redirects, and structured data.</li>
                <li>Version controlled projects with Git and streamlined releases.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Webotics Pvt. Ltd.</h4>
              <h5>15/Jan/2021 – Present</h5>
              <p>WordPress Developer</p>
              <ul>
                <li>Led end‑to‑end builds for client websites and landing pages.</li>
                <li>Optimized Core Web Vitals via caching, image optimization, and lazy‑loading.</li>
                <li>Hardened security with updates, firewalls, and automated backups.</li>
                <li>Mentored junior developers and managed client communication.</li>
              </ul>
            </div>

            

            <h3 className="resume-title">Core Strengths</h3>
            <div className="resume-item">
              <ul>
                <li>Trustworthiness</li>
                <li>Hard working and dedicated to my work</li>
                <li>Previous client-facing experience</li>
                <li>Problem‑solving mindset</li>
              </ul>
            </div>

            <h3 className="resume-title">Interests</h3>
            <div className="resume-item">
              <ul>
                <li>Surfing Internet</li>
                <li>Doing Coding</li>
                <li>Playing Cricket</li>
              </ul>
            </div>

            <h3 className="resume-title">Declaration</h3>
            <div className="resume-item">
              <p>
                I hereby declare that the above-mentioned information is correct to the best
                of my knowledge and belief.
              </p>
              <p>Signature: Ravish Kumar</p>
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Resume;
