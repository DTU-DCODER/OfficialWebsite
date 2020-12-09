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
/*eslint-disable*/
import React from "react";

// reactstrap components
import {Row, Container} from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>

          <div className="footer-nav">
            <img
              alt="logo"
              src={"./blue.png"}
              style={{
                height: "calc(1.5vh + 1.5vh)",
                margin: 0,
                padding: 0,
              }}
            />
            <span className="copyright bold">D_CODER
            </span>

          </div>
          <div className="credits ml-auto">
            <p> Contact Us on</p>
            <a href={"https://www.instagram.com/d_coder_dtu/"}> <i style={{fontSize: 20}} className="fa fa-instagram"
                                                                   aria-hidden="true"></i></a>
            <a href={"https://www.linkedin.com/company/dcoder/"}> <i style={{fontSize: 20}}
                                                                     className="fa fa-linkedin-square"
                                                                     aria-hidden="true"></i></a>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
