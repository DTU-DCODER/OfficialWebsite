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
  // ButtonGroup,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown
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
        setNavbarColor("navbar-custom");
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor("navbar-transparent");
      }
    };

    if (props.noPhoto) {
      setNavbarColor("navbar-custom");
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
              className="m-0 font-weight-bold coder-heading">
              {" "}
              <img
                alt="logo"
                src={"./white.png"}
                style={{
                  height: "calc(1.5vh + 1.5vh)",
                  margin: 0,
                  padding: 0,
                  marginRight: 5
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
              <NavLink className={"navbar-btn"} href="/events">Events</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/meetOurSeniors">Meet Our Seniors</NavLink>

            </NavItem>

            <NavItem>
              <NavLink href="/council">Council</NavLink>
            </NavItem>


            <NavItem>
              <Button color="primary" href="/member">
                Member Login
              </Button>
            </NavItem>


          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
