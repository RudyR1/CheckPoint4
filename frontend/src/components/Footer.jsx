import React from "react";
import "../sass/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>My Book Store &copy;{new Date().getFullYear()}</p>
      </div>
      <span>
        Made with <i className="fa fa-heart pulse" /> by Rudy
      </span>
    </div>
  );
}

export default Footer;
