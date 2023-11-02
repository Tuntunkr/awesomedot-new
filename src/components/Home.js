import React from "react";
import line1 from "../assets/right-line.svg";
import line2 from "../assets/left-line.svg";
import "../styles/Home.css";
import Button from "./Button";
// import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container ">
        <div className="linerpng">
          <img
            src={line1}
            className="linepatterna"
            width={170}
            height={10}
            alt="img"
          />

          <img
            src={line2}
            className="linepatternb"
            width={170}
            height={220}
            alt="imgs"
          />

          <section className="s-c contributor-section  secSpacer ">
            <div className="card-box">
              <h1 className="card-box-main text-bold text-center text-6xl text-white ">
                <span className="card-heading">Curated for the</span> <br />
                <span className="heading card-heading-sub">Contributors.</span>
              </h1>
              <p className="mpara ">
                <span className="mpara-heading">
                  Awesome dot is a company that curates the best resources,
                  projects and
                  <br /> learning in the polkadot ecosystem.
                </span>
              </p>

              <div className="search-section">
                <button className="search-section-sub-a">
                  Search Projects
                </button>
                <div className="cursor-pointer rounded-md text-sm font-medium text-white">
                  <Button />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
