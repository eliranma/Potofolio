import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Facebook, LinkedIn, Logo, WhatsApp } from "../assets";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const LINKS = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];
  const SOCIAL_MEDIA = [
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://linkedin.com/eliran-manzeli",
    },
    {
      name: "WhatsApp",
      icon: WhatsApp,
      link: 'https://wa.me/+972522323664',
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: 'https://facebook.com/manzeli',
    },
  ];
  return (
    <Navbar  expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className='navbar-logo' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {LINKS.map((link, index) => (
              <Nav.Link
                key={index}
                className={
                  activeLink.toLowerCase() === link.name.toLowerCase()
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={()=>setActiveLink(link.name.toLowerCase())}
                href={link.link}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {SOCIAL_MEDIA.map((obj, index) => (
                <a key={index} href={obj.link}>
                  <img src={obj.icon} alt={obj.name} />
                </a>
              ))}
            </div>
            <button onClick={() => console.log("Clicked")}>
              <span>Let's Connect !</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
