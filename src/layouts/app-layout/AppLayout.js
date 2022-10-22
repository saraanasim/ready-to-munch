import { Box, Container, IconButton } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./app-layout.scss";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const AppLayout = (props) => {
  return (
    <div className="app__layout">
      <Box className="inner__container">
        <Navbar />
        {props.children}
        <footer>
          <Container className="footer__container">
            <p>Copyright 2022. Ready to Munch - All Rights Reserved</p>
            <Box className="icon__container">
              <IconButton className="icon__button">
                <FiFacebook />
              </IconButton>
              <IconButton className="icon__button">
                <FiInstagram />
              </IconButton>
              <IconButton className="icon__button">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin />
                </a>
              </IconButton>
            </Box>
          </Container>
        </footer>
      </Box>
    </div>
  );
};

export default AppLayout;
