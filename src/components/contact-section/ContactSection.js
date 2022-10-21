import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./contact-section.scss";
export const ContactSection = () => {
  const contactImagesData = useStaticQuery(graphql`
    query MyContactQuery {
      banner_img: file(relativePath: { eq: "mainImage_contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pizza_image: file(relativePath: { eq: "pizzaImg_contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box className="container_contact">
      <Container maxWidth="lg" className="gridContainer_contact">
        <Grid container className="grid_contact">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="leftGrid_contact"
          >
            <Img
              className="pizzaImage_contact"
              fluid={contactImagesData.pizza_image.childImageSharp.fluid}
            />
            <Box className="leftBox_contact">
              <Typography id="sectionTitle_contact">DOWNLOAD APP</Typography>
              <Typography id="heading_contact">
                SIMPLE WAY TO
                <br /> ORDER YOUR FOOD
              </Typography>
              <Button id="btn__contact">Get App</Button>
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="rightGrid_contact"
          >
            <Img
              className="bannerImg_contact"
              fluid={contactImagesData.banner_img.childImageSharp.fluid}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
