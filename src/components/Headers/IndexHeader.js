/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
          // "https://images.static-collegedunia.com/public/college_data/images/campusimage/15196461451428402392.2c48ae01cf9e4d059b4471bf5754dc41%20dtu.jpg?tr=w-205,h-130,c-force"
           "url(" + require("assets/img/bgbgbg.png") + ")",
        }}
        //antoine-barres.jpg
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <img
                  alt="logo"
                  src={"./logo w.png"}
                  style={{
                    height: "calc(23vh + 23vh)",
                    margin: 0,
                    padding: 0,
                  }}
                />
              {/* <img src={require("../../assets/img/logo w.png")} alt='LOGO' /> */}
              <h1 className="presentation-title"><b>D_CODER</b></h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center"><b>
              THE MOST ACTIVE CODING SOCIECTY OF DTU </b>
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />

      </div>
    </>
  );
}

export default IndexHeader;
