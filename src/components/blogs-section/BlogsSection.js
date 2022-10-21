import { Box, Container, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { SponsorsSection } from "../sponsors-section/SponsorsSection";
import "./blogs-section.scss";
import CarouselComponent from "./carousel-component/CarouselComponent";
export const BlogsSection = () => {
  const blogsImagesData = useStaticQuery(graphql`
    query MyBlogsQuery {
      sauce_img: file(relativePath: { eq: "sauce_fries_blogs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box className="container_blogs">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="section_container_blogs">
          <Img
            className="sauceImage_blogs"
            fluid={blogsImagesData.sauce_img.childImageSharp.fluid}
          />

          <Typography className="sectionTitle_blogs">Blogs</Typography>
        </div>
      </div>
      <Typography className="title_blogs">Our Blogs</Typography>
      <Container maxWidth="lg" sx={{ padding: "50px 0px" }}>
        <CarouselComponent />
      </Container>
      <Typography
        sx={{ color: "#39B54A", fontWeight: 700, textAlign: "center" }}
      >
        Read More
      </Typography>
      <SponsorsSection />
    </Box>
  );
};
