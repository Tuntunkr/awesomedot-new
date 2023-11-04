import React from "react";
import icons from "../assets/share-07.svg";
import polkadot from "../assets/polkadot.png";
import twitter from "../assets/twitter.svg";
import github from "../assets/github.svg";
import save from "../assets/save.svg";
import graph from "../assets/graph.svg";
import star from "../assets/star.svg";
// card image import here ...
import talisman from "../assets/talisman.svg"
import frentube from "../assets/frentube.svg"
import grill from "../assets/grill.svg"
import nova from "../assets/nova.svg"
import polkaverse from "../assets/polkaverse.svg"

function Card() {
  return (
    <>
      <div class="container mt-5 mb-3">
        <div class="row">
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={polkadot} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
            {/* 2 */}
          </div>
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={talisman} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
          </div>
            {/* 3 */}
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={frentube} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
            {/* 2 */}
          </div>
        </div>

        {/* 2 */}
        <div class="row mt-3">
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={grill} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
            {/* 2 */}
          </div>
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={nova} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
          </div>
            {/* 3 */}
          <div class="col-md-4">
            <div className="card-main">
              <div className="inner_first">
                <div className="d-flex">
                  <img src={polkaverse} alt="icos" />
                  <div className="second_text">
                    <p>
                      <span>Library</span>
                    </p>
                    <h2>Crunch</h2>
                    <ul className="third_econd">
                      <li>
                        <a href="#">
                          <img src={github} alt="icons" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <img src={star} alt="icons" />
                      </li>
                      <li>
                        <h4>48</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="review">
                  <img src={icons} alt="icons" />
                </div>
              </div>

              <ul className="card-list">
                <li>
                  <a className="inner-card-one" href="#">
                    Library
                  </a>
                </li>
                <li>
                  <a className="inner-card-two" href="#">
                    Polkadot
                  </a>
                </li>
                <li>
                  <a className="inner-card-three" href="#">
                    Kusama
                  </a>
                </li>
                <li>
                  <a className="inner-card-four" href="#">
                    Substrate
                  </a>
                </li>
              </ul>
              <p className="card-parag">
                A command-line interface (CLI) to easily automate payouts of
                staking rewards on Substrate-based chains.
              </p>
              <div className="d-flex">
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
                <img src={graph} alt="icons" />
              </div>
            </div>
            {/* 2 */}
          </div>
        </div>
      </div>
      {/* 2 */}
      
    </>
  );
}

export default Card;
