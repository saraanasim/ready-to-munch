import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./features-section.scss";
import { graphql, useStaticQuery } from "gatsby";
import { BsCheck2Circle } from "react-icons/bs";
import Img from "gatsby-image";
import { StatsSection } from "../stats-section/StatsSection";
export const FeaturesSection = () => {
  const featuresImagesData = useStaticQuery(graphql`
    query MyFeaturesQuery {
      fruit_img: file(relativePath: { eq: "fruit_features.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      main_img: file(relativePath: { eq: "mainImage_features.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const featuresArr = [
    "Restaurant Listing",
    "Complete Ordering",
    "Multiple Order Types",
    "Integrated POS",
    "Order History",
    "Online Payments",
    "Secure Login",
    "Profiling",
    "Feedback",
    "Vouchers",
    "Favourite Restaurants and Items",
    "Rating and Reviews",
  ];
  return (
    <Box className="container_features">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="section_container_features">
          <Img
            className="fruitImage_features"
            fluid={featuresImagesData.fruit_img.childImageSharp.fluid}
          />

          <Typography className="sectionTitle_features">FEATURES</Typography>
        </div>
      </div>
      <Typography className="title_features">Our Features</Typography>
      <Container maxWidth="md">
        <Grid container justifyContent="center" sx={{ padding: 0, margin: 0 }}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="gridItem_features"
          >
            <Box className="listContainer__features">
              {featuresArr.map((item, idx) => {
                return (
                  <Box className="listItemBox_features" key={idx}>
                    <BsCheck2Circle id="tick" />
                    <Typography className="listItem_features">
                      {item}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="gridItem_features"
          >
            <Img
              className="mainImage_features"
              fluid={featuresImagesData.main_img.childImageSharp.fluid}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
