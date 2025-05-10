import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2>About BuddyMart</h2>
          <p>Your one-stop shop for quality products at the best prices. Shop with us for a seamless experience.</p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Contact Us</a></li>
            <li><a href='/'>Grow With BuddyMart</a></li>
            <li><a href='/'>Other</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: buddymart@gmail.com</p>
          <p>Phone: +91 7016XXXXXX</p>
          <div className="social-links">
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Facebook</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} BuddyMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
