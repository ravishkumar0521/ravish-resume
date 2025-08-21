import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";


const Stats = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Initialize PureCounter
    new PureCounter();
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Stats Item 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="35"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong> <span>across India & abroad</span>
              </p>
            </div>
          </div>

          {/* Stats Item 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="50"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Projects Delivered</strong> <span>websites & apps</span>
              </p>
            </div>
          </div>

                     {/* Stats Item 3 */}
           <div className="col-lg-3 col-md-6">
             <div className="stats-item">
               <i className="bi bi-headset"></i>
               <span className="support-text">24/7</span>
               <p>
                 <strong>Hours of Support</strong> <span>always available</span>
               </p>
             </div>
           </div>

          {/* Stats Item 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-briefcase"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="5"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Years Experience</strong> <span>WordPress / PHP / React Js / Wix / Webflow</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;