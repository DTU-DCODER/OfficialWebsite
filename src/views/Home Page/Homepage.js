
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
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="section text-center"
          >
          <Container
          >
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
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Why Join D_CODER?</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                {/* <Button
                  className="btn-round"
                  color="info"
                  href="/AboutUs"
                  
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Training and Mentorship</h4>
                    <p className="description mt-2">
                    Get specialised training and mentorship from our expert mentors, whom you can turn to for guidance and resolving any queries you have while coding.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Build a Network</h4>
                    <p className="description mt-2">
                    Join the community and build a network with our illustrious alumni, seniors and peers united by a common desire to continuously learn, interact, collaborate, and innovate.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Build amazing projects</h4>
                    <p className="description mt-2">
                    Get a chance to be a part of amazing real life projects under our development team or take guidance from our seniors to make great personal projects.
                    </p>
                    
                  </div>
                </div>
              </Col>
              
            </Row>

            <Row className="mt-5">
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Win Hackathons</h4>
                    <p className="description mt-2">
                    With numerous wins in different hackathons by the D_CODER team you can also make a team, learn and get proper guidance from our experienced seniors.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Organise Events</h4>
                    <p className="description mt-2">
                    Learn management and build your personality by organizing your own tech events with D_CODER dtu.
Is organizing a tech event your deepest desire? Have no worries because D_CODER encourages members to organize their own events with assistance.
                    </p>
                    
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Tech initiative</h4>
                    <p className="description mt-2">
                    Be a part of different social and tech initiatives with us, help promote coding culture and bring a change in the society.
                    </p>
                    
                  </div>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
        {/* <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}



        {/* <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div> */}

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
                        padding: 20,
                    }}                
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea architecto rem neque quis assumenda delectus consequatur, eos aliquam est necessitatibus quibusdam placeat explicabo, vitae hic modi doloremque odit ipsa expedita ducimus at. Molestias, quisquam ipsam odio facilis qui, inventore impedit nam architecto tempore eligendi aut, ad delectus repellat minus quo.</p>
            </Col>
        </Row>
        </div>

      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
