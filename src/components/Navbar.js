import React from "react";
import Logo from "../assets/logo.png"
import Button from "./Button";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            {/* LOGO */}
            <div className="logo-box">
              <Link to="/">
                <img src={Logo} alt="Paraconf" />
              </Link>
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
                <Link href={"/"}>
                  <img src={Logo} alt="Paraconf" id="mainnavLabel" />
                </Link>

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
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/project">
                      projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/learn">
                      Learn
                    </Link>
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
