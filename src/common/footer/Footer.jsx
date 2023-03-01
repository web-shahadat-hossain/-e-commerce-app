import React from "react";
import "./footer.css";
import logo from "../../Assets/images/Vector (1).png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="logo"
          >
            <img src={logo} alt="" />
            <span style={{ paddingLeft: "10px" }}>Fashion</span>
          </div>

          <p>Lorem ispum is a placeholder text commonly used as a free text.</p>
          <div className="footer_social">
            <a href="https://www.facebook.com/globalitmaster">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com/GlobalITMaster">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://twitter.com/GlobalITMaster">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://twitter.com/GlobalITMaster">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
          <h6>Copyrights 2021 @Iamabdulqadeer01</h6>
        </div>
        <div className="footer_menu_items">
          <div>
            {" "}
            <h3>Product</h3>
            <ul>
              <li>Download </li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3>Category</h3>
            <ul>
              <li>Download </li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3>My Account</h3>
            <ul>
              <li>Download </li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div className="footer_contact">
            <p>
              <span>
                <i className="bx bx-location-plus"></i>
              </span>
              Nurpur Road No. 1, Dania
            </p>
            <p>
              <span>
                <i className="bx bxs-envelope"></i>
              </span>
              info@globalitmaster.com
            </p>
            <p>
              <span>
                <i className="bx bx-phone"></i>
              </span>
              +8809611745310
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
