/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/hack.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
            <img className="motto center" src={"./D_CODER.png"}
            style={{
              height: "calc(20vh + 20vh)",
              marginLeft: 0,
              padding: 0,
              marginBottom: -75,

              
            }}/>
          <div className="motto text-center">
            <h1 style={{
              fontSize: 65,
              fontWeight: 300,

            }}>D_CODER</h1>
            <h3
            style={{
              fontSize: 28,
              fontWeight: 300,

            }}>Most Active Coding Society of DTU.</h3>
            <br />
            {/* <Button
              href="/AboutUs"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              About Us
            </Button> */}
            <Button className="btn-round" color="neutral" type="button" outline>
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
