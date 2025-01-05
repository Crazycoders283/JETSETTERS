import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src="https://via.placeholder.com/100x100?text=Logo"
            alt="Jet Setters Logo"
            className="footer-logo"
          />
          <h4 className="footer-title">JET SETTERS</h4>
          <p className="footer-subtitle">Connect us</p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Service</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Coronavirus (COVID-19)</a>
            </li>
            <li>
              <a href="#">Cruise</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Our Work</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Packages</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Dubai</a>
            </li>
            <li>
              <a href="#">Europe</a>
            </li>
            <li>
              <a href="#">Kashmir</a>
            </li>
            <li>
              <a href="#">North East & Bhutan</a>
            </li>
            <li>
              <a href="#">Georgia</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contacts us</h4>
          <ul className="footer-contacts">
            <li>
              <i className="bi bi-envelope"></i>{" "}
              <a href="mailto:bookings@jet-setters.us">
                bookings@jet-setters.us
              </a>
            </li>
            <li>
              <i className="bi bi-telephone"></i> (+1) 888-581-3028
            </li>
            <li>
              <i className="bi bi-geo-alt"></i> 513 W Bonaventure Ave Tracy, CA
              95391
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 |{" "}
          <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
