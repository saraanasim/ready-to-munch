import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./testimonials-section.scss";
import CarouselComponent from "./carousel-component-testimonials/CarouselComponent";
export const TestimonialsSection = () => {
  const testimonialsImagesData = useStaticQuery(graphql`
    query MyTestimonialsQuery {
      banner_img: file(relativePath: { eq: "mainImage_testimonials.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quote_img: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box className="container_testimonials">
      <Container maxWidth="md" className="gridContainer_testimonials">
        <Grid container className="grid_testimonials">
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="leftGrid_testimonials"
          >
            <Box className="leftBox_testimonials">
              <Box className="top__testimonials">
                <Typography className="sectionTitle_testimonials">
                  TESTIMONIAL
                </Typography>
                <Typography className="title_testimonials">
                  What Our <br /> Customers Say
                </Typography>
                <Img
                  className="quoteImg_testimonials"
                  fluid={testimonialsImagesData.quote_img.childImageSharp.fluid}
                />
              </Box>

              <CarouselComponent />
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="rightGrid_testimonials"
          >
            <Img
              className="bannerImg_testimonials"
              fluid={testimonialsImagesData.banner_img.childImageSharp.fluid}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
