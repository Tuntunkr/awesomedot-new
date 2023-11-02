import React from "react";
import Logo from "../assets/logo.png"
import Button from "./Button";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            {/* LOGO */}
            <div className="logo-box">
              <a href="#">
                <img src={Logo} alt="Paraconf" />
              </a>
            </div>

            {/* TAGGLE BUTTON */}
            <div className="togl-btn-box">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mainnav"
                aria-controls="mainnav"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* NAV ITEMS / SIDEBAR */}
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="mainnav"
              aria-labelledby="mainnavLabel"
            >
              <div className="offcanvas-header">
                {/* Offcave Logo  */}
                <a href="#">
                  <img src={Logo} alt="Paraconf" id="mainnavLabel" />
                </a>

                {/* Close Btn */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              {/* Offcave body */}
              <div className="offcanvas-body">
                <ul className="navbar-nav pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Learn
                    </a>
                  </li>
                </ul>

                {/* Wallet / login btn (for mobile device) */}
                <div class="mob-btn">
                  <Button/>
                </div>
              </div>
            </div>

            <div className="nav-endbox">
              <button type="button" class="btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <Button/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
