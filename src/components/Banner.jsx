import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
      <div className="banner">
        <div className="slider" style={{ "--quantity": 6 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src="./satya.png" alt="dragon 2" />
            <div className="info">
              <h1>SATYA SWARUP SAHU</h1>
              <h5>Regd: 2241019221</h5>
            </div>
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src="./tanmay.png" alt="dragon 2" />
            <div className="info">
              <h1>TANMAY SAHU</h1>
              <h5>Regd: 2241019239</h5>
            </div>
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src="./samir.png" alt="dragon 3" />
            <div className="info">
              <h1>SAMIR BISWAL</h1>
              <h5>Regd: 2241002215</h5>
            </div>
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src="./sumit.png" alt="dragon 4" />
            <div className="info">
              <h1>SUMIT KUMAR SAHOO</h1>
              <h5>Regd: 2241019147</h5>
            </div>
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src="./om.png" alt="dragon 5" />
            <div className="info">
              <h1>OM CHOUDHARY</h1>
              <h5>Regd: 2241003035</h5>
            </div>
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src="./koushikee.png" alt="dragon 6" />
            <div className="info">
              <h1>KOUSHIKEE MANTRY</h1>
              <h5>Regd: 2241013099</h5>
            </div>
          </div>
        </div>
        <div className="content">
          <h1 data-content="DEV_FUSION">DEV_FUSION</h1>
          <div className="author">
            <h2>TEAM:80</h2>
            <p>
              <b>Problem Statement</b>
            </p>
            <p>Let’s learn constitution in a simpler manner-institution perspective</p>
          </div>
          <div className="model"></div>
        </div>
      </div>
  );
};

export default Banner;
