import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import {useMediaQuery} from "react-responsive";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function IndexNavbar(props) {
  const isMobile = useMediaQuery({query: "(max-width: 993px)"});

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor("navbar-transparent");
      }
    };

    if (props.noPhoto) {
      console.log("hello");
      setNavbarColor("");
    } else {
      window.addEventListener("scroll", updateNavbarColor);
    }

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [props.noPhoto]);
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" href="/">
            <h3
              className="m-0 font-weight-bold"
              style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}
            >
              {" "}
              <img
                alt="logo"
                src={"./blue.png"}
                style={{
                  height: "calc(1.5vh + 1.5vh)",
                  margin: 0,
                  padding: 0,
                }}
              />
              D_Coder
            </h3>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1"/>
            <span className="navbar-toggler-bar bar2"/>
            <span className="navbar-toggler-bar bar3"/>
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            <NavItem>
              <NavLink href="/events">Events</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/meetOurSeniors">Meet Our Seniors</NavLink>

            </NavItem>

            

            {isMobile ? null : <NavItem>
              <UncontrolledDropdown className="btn-group">
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
				  type="button"
				  
                >
                  About
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/AboutUs">
                    Mission/Vision
                  </DropdownItem>
                  <DropdownItem href="/seniorCouncil">
                    Senior Council
                  </DropdownItem>
                  <DropdownItem href="/juniorCouncil">
                    Junior Council &nbsp;&nbsp;&nbsp;&nbsp;
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>}

            <NavItem>
              <Button color="primary" href="/member">
                Member Login
              </Button>
            </NavItem>
            {isMobile ? <NavItem>
              <UncontrolledDropdown className="btn-group">
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="info"
                  data-toggle="dropdown"
                  type="button"
                >
                  Primary
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/events">
                    Mission/Vision
                  </DropdownItem>
                  <DropdownItem href="#pablo">
                    Junior Council
                  </DropdownItem>
                  <DropdownItem href="#pablo">
                    Senior Council &nbsp;&nbsp;&nbsp;&nbsp;
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem> : null}


          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
