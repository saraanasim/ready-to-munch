import { Container, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Box } from "@mui/system";

// type MobileMenuProps = {
//   anchorEl: null | HTMLElement;
//   open: boolean;
//   handleClose: () => void;
//setActiveLink: React.SetStateAction<string>;
// };

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const scrollPosition = useScrollPosition();
  const { height, width } = useWindowDimensions();
  const logoImgData = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log("Logo img data", logoImgData);
  const [anchorEl, setAnchorEl] = useState();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={scrollPosition <= 5 ? styles.navStyle : styles.navScrolling}>
      <Container sx={styles.innerContainer}>
        <div style={styles.logoContainer}>
          <Img
            style={styles.logoStyle}
            fluid={logoImgData.file.childImageSharp.fluid}
          />
        </div>

        <Box sx={styles.linkContainer}>
          <a
            href="#features"
            style={activeLink === "Features" ? styles.activeLink : styles.link}
            onClick={() => setActiveLink("Features")}
          >
            Features
          </a>
          <a
            href="#blogs"
            style={activeLink === "Blogs" ? styles.activeLink : styles.link}
            onClick={() => setActiveLink("Blogs")}
          >
            Blogs
          </a>
          <a
            href="#testimonials"
            style={
              activeLink === "Testimonials" ? styles.activeLink : styles.link
            }
            onClick={() => setActiveLink("Testimonials")}
          >
            Testimonials
          </a>

          <a
            href="#contact"
            style={activeLink === "Contact" ? styles.activeLink : styles.link}
            onClick={() => setActiveLink("Contact")}
          >
            Contact Us
          </a>
        </Box>
        <IconButton
          sx={styles.hamburger}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <GiHamburgerMenu color="#5cc2ef" />
        </IconButton>
      </Container>
      <div style={{ position: "relative" }}>
        <MobileMenu
          showMobileMenu={showMobileMenu}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setShowMobileMenu={setShowMobileMenu}
        />
      </div>
    </Box>
  );
};

export default Navbar;

const MobileMenu = ({
  showMobileMenu,
  activeLink,
  setActiveLink,
  setShowMobileMenu,
}) => {
  function handleClickMob(link) {
    setActiveLink(link);
    setShowMobileMenu(false);
  }
  return (
    <Box sx={showMobileMenu ? styles.showMob : styles.hideMob}>
      <a
        href="#features"
        style={
          activeLink === "Features" ? styles.activeLinkMob : styles.linkMob
        }
        onClick={() => handleClickMob("Features")}
      >
        Features
      </a>
      <a
        href="#blogs"
        style={activeLink === "Blog" ? styles.activeLinkMob : styles.linkMob}
        onClick={() => handleClickMob("Blog")}
      >
        Blog
      </a>
      <a
        href="#testimonials"
        style={
          activeLink === "Testimonials" ? styles.activeLinkMob : styles.linkMob
        }
        onClick={() => handleClickMob("Testimonials")}
      >
        Testimonials
      </a>
      <a
        href="#contact"
        style={activeLink === "Contact" ? styles.activeLinkMob : styles.linkMob}
        onClick={() => handleClickMob("Contact")}
      >
        Contact Us
      </a>
    </Box>
  );
};

const styles = {
  navStyle: {
    width: "100%",
    height: "100%",
    maxHeight: "73px",
    // position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
    top: 0,
    backgroundColor: "#fff",
    transition: "all 350ms linear",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    // margin: "50px 50px 0px 50px",
    // boxShadow: "0 4px 10px 2px #93908D",
  },
  navScrolling: {
    width: "100%",
    height: "100%",
    maxHeight: "73px",
    // position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
    top: 0,
    backgroundColor: "#fff",
    boxShadow: "0 4px 15px 2px #93908D",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    // margin: "50px 50px 0px 50px",
  },
  innerContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: "20px",
  },
  logoContainer: {
    width: "100%",
    maxWidth: "100px",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    //lightBlue; #5cc2ef
    //darkBlue;#4270b6
    fontSize: "22px",
    paddingLeft: "10px",
    color: "#4270b6",
  },
  logoStyle: {
    width: "100%",
    objectFit: "contain",
  },
  linkContainer: {
    flexGrow: 1,
    display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginLeft: "45px",
    fontWeight: 500,
    fontSize: "1rem",
    color: "#808080",
  },
  activeLink: {
    fontSize: "1rem",
    color: "#808080",
    marginLeft: "45px",
    fontWeight: 600,
  },
  hamburger: {
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
  },
  showMob: {
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
    flexDirection: "column",
    position: "absolute",
    bottom: -180,
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 250ms linear",
  },
  hideMob: {
    display: "none",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    transition: "all 250ms linear",
  },
  activeLinkMob: {
    fontSize: "1rem",
    color: "#808080",
    marginLeft: "45px",
    fontWeight: 600,
    paddingBottom: "5px",
    paddingTop: "5px",
  },
  linkMob: {
    fontSize: "1rem",
    color: "#808080",
    marginLeft: "45px",
    fontWeight: 500,
    paddingBottom: "5px",
    paddingTop: "5px",
  },
};
