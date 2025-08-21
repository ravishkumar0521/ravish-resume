import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">ravishyadav</strong>{" "}
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </div>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
}

export default Footer;
