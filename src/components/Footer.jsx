import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-icons">
          {/* Social Media Icons */}
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <h4>EventSpot Lite</h4>
          <ul>
            <li><a href="#">Organizers</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Service</h4>
          <ul>
            <li><a href="#">Organize Events</a></li>
            <li><a href="#">Became Sponsor</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">List Events</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Activity</h4>
          <ul>
          <li><a href="#">Events</a></li>
            <li><a href="#">Influencers</a></li>
            <li><a href="#">Co-branding</a></li>
          </ul>
        </div>
        <div className="EventSpot">
          <h4>EventSpot Lite Subscription</h4>
          <div className="EventSpot-input">
            <input type="email" placeholder="Subscribe to our EventSpot Lite" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 EventSpot Lite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
