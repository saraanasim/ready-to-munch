import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Img from "gatsby-image";
import React from "react";
import "./home-section.scss";

export const HomeSection = () => {
  const homeImagesData = useStaticQuery(graphql`
    query MyQuery {
      banner_img: file(relativePath: { eq: "banner_img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      roll_image: file(relativePath: { eq: "rollImg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sauce_image: file(relativePath: { eq: "sauceImg_home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container maxWidth="lg" className="container_home">
      <Img
        className="rollImage_home"
        fluid={homeImagesData.roll_image.childImageSharp.fluid}
      />
      <Container maxWidth="lg">
        <Grid container className="gridContainer_home">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="leftGrid_home"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div className="tag_container_home">
                <Img
                  className="sauceImage_home"
                  fluid={homeImagesData.sauce_image.childImageSharp.fluid}
                />
                <Box className="tag_home">
                  <Typography>READY TO MUNCH</Typography>
                </Box>
              </div>
              <Typography id="title_home">
                Online Food <br /> Ordering App
              </Typography>
              <Typography id="desc_home">
                Ready to Munch offers a long and detailed list of the best
                restaurants nearby with menu items at the same restaurants'
                price, with no extra fee available to order food Online with
                home delivery and takeaway options.
              </Typography>
              <Button
                endIcon={
                  <GoChevronRight
                    style={{
                      backgroundColor: "#fff",
                      color: "#ffbf00",
                      padding: "8px",
                      fontSize: "40px",
                      borderRadius: "50%",
                      fontWeight: "bold",
                    }}
                  />
                }
                id="btn_home"
              >
                Order Now
              </Button>
            </Box>

            <Box className="iconIcontainer_home">
              <IconButton>
                <AiFillInstagram />
              </IconButton>
              <IconButton>
                <FaFacebookF />
              </IconButton>
              <IconButton>
                <AiOutlineTwitter />
              </IconButton>
              <IconButton>
                <FaLinkedinIn />
              </IconButton>
              <IconButton>
                <AiFillYoutube />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="rightGrid_home"
          >
            <Img
              className="bannerImg_home"
              fluid={homeImagesData.banner_img.childImageSharp.fluid}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
