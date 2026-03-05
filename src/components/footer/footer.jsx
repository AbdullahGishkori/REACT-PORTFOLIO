import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>My Portfolio</h3>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <p>Follow me on social media</p>

      <div className="footer-bottom">
        © 2026 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;