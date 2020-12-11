import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import ParticlesBg from "particles-bg";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>

      <IndexNavbar/>
      <IndexHeader/>
      <br/>
      <br/>
      <div className="main" style={{overflow: "hidden"}}>
        <div className="text-center">
          <Container>

            <h2 className="title mb-5">Internship/Placement</h2>
            <Row>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
            </Row>

            <Row className="mt-5 mb-5">
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
              <Col md="3">
                <img src="https://files.codingninjas.in/0000000000001235.png" alt=""/>
              </Col>
            </Row>


            <div style={{width: "100", height: "100%", position: "relative"}}>
              <ParticlesBg num={5} type="circle" bg={true}/>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Why Join D_CODER?</h2>
                  <h5 className="description">
                  D_CODER is the most active tech society of DTU. We prepare our members for the internships and placements. Our senior council has badged internship in coveted companies like Goldman Sachs, Microsoft, DE Shaw and many others. We will clear all your doubts and will aim to increase your proficiency.
                  </h5>
                  <br/>
                </Col>
              </Row>
              <br/>
              <br/>


              <Row>

                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-album-2"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Training and Mentorship</h4>
                      <p className="description">
                      Get specialised training and mentorship from our expert mentors, whom you can turn to for guidance and resolving any queries you have while coding.
                      </p>

                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bulb-63"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Build a Network</h4>
                      <p>
                        Join the community and build a network with our illustrious alumni, seniors and peers united by a common desire to continuously learn, interact, collaborate, and innovate.
                      </p>

                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chart-bar-32"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Build amazing projects</h4>
                      <p>
                      Get a chance to be a part of amazing real life projects under our development team or take guidance from our seniors to make great personal projects.
                      </p>

                    </div>
                  </div>
                </Col>
                
              </Row>

              <Row>

               
                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bulb-63"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Win Hackathons</h4>
                      <p>
                      With numerous wins in different hackathons by the D_CODER team you can also make a team, learn and get proper guidance from our experienced seniors.
                      </p>

                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chart-bar-32"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Organise Events</h4>
                      <p>
                                  Learn management and build your personality by organizing your own tech events with D_CODER dtu.
            Is organizing a tech event your deepest desire? Have no worries because D_CODER encourages members to organize their own events with assistance.
                      </p>

                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-sun-fog-29"/>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Tech initiative</h4>
                      <p>
                      Be a part of different social and tech initiatives with us, help promote coding culture and bring a change in the society.
                      </p>

                    </div>
                  </div>
                </Col>
              </Row>
              <br/>
              <br/>

            </div>
          </Container>
        </div>
        

        <div
          style={{
            backgroundColor: '#e6e6e6',
            paddingTop: 30,
            paddingBottom: 70
          }}
        >
        <h2 className="title"
          style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >About Us</h2>

        <Row>
          <Col md="6">
            <img src="https://i.pinimg.com/originals/89/86/d6/8986d6bfbb13ab11f47d68e273c9714e.jpg" alt=""
              style={{
                width: '30vw',
                float: 'right',
                borderRadius: 10,

              }}
            />
          </Col>

          <Col md="4">
                <p
                    style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 16,
                        fontWeight: 400
                       
                    }}
                >D_CODER ,is a Technical society of DTU, dedicated in the advancement of software innovation and excellence for the benefit of the students. We aim to build a community of skilled people in the college coming together for the benefit of all. We provide our members platform to learn new skills and brush up their existing ones. We provide a medium for like minded people to come together and work towards the betterment of software department and the university as a whole. Today, D_CODER DTU has over 100+ active members and is the proud organiser of virtual tech fest with over 1500+ participants and periodic webinars and fun events.</p>
            </Col>
        </Row>
        </div>

      </div>
      <DemoFooter/>
    </>
  );
}

export default LandingPage;
