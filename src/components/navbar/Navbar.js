import React from "react";
import "./Navbar.css";
import Button from "../../comp/Button";
const Navbar = () => {
  const navMenus = {};
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-content-left">
            <a className="navbar-link logo" href="#header" data-anchor-link></a>

            <div className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </div>

            <ul className="navbar-toggle-content">
              <li className="navbar-item">
                <a
                  className="navbar-link"
                  href="#some-content-1"
                  data-anchor-link
                >
                  About
                </a>
              </li>

              <li className="navbar-item">
                <a
                  className="navbar-link"
                  href="#some-content-2"
                  data-anchor-link
                >
                  company
                </a>
              </li>

              <li className="navbar-item">
                <a
                  className="navbar-link"
                  href="#some-content-3"
                  data-anchor-link
                >
                  technologies
                </a>
              </li>

              <li className="navbar-item">
                <a
                  className="navbar-link"
                  href="#some-content-4"
                  data-anchor-link
                >
                  contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-content-right">
            <a className="navbar-link" href="#">
              blog
            </a>

            <Button label={"Get in touch"} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
