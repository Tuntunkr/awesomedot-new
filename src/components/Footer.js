import React from "react";
import Logo from "../assets/foo-logo.svg";
import check from "../assets/check.svg";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import save from "../assets/save.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="container">
        <div class="row">
          {/* LOGO */}
          <div className="logo-box">
            <Link to="/">
              <img src={Logo} alt="awesome" />
            </Link>
          </div>
          <div class="col-6 mt-4">
            <ul className="foot-menu pe-3">
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
                <Link className="nav-link" to="/project">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learn">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <div className="right-side">
              <p>Subscribe to our newsletter for latest updates</p>
              <div className="search-bar">
                <form action="/search" method="GET">
                  <input
                    type="text"
                    name="query"
                    placeholder=" Enter your Email "
                  />
                  <button className="primary-btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="check-menu">
                <div className="list-1">
                  <img src={check} alt="awesome" />
                  <p> Daily updates</p>
                </div>
                <div className="list-2">
                  <img src={check} alt="awesome" />
                  <p>Weekly updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="hr"></p>
        <div class="row">
          <div className="copyright">
            <div class="col">© 2023 Awesome dot. All rights reserved.</div>
            <div class="col">
              <div className="left-side-icons">
                <ul className="card-list second">
                  <li>
                    <a href="#">
                      <img src={twitter} alt="icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={github} alt="icons" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={save} alt="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
