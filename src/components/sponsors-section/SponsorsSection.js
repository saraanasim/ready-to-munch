import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./sponsors-section.scss";
import Img from "gatsby-image";
export const SponsorsSection = () => {
  const statsArray = [
    { value: "80+", desc: "Number of Restaurants" },
    { value: "130K", desc: "Number of User" },
    { value: "18", desc: "Number of Cities" },
    { value: "1M", desc: "Total Downloads" },
    { value: "100K", desc: "Positive Reviews" },
  ];
  const sponsorsImagesData = useStaticQuery(graphql`
    query MySponsorsQuery {
      sp1: file(relativePath: { eq: "sp1_sponsors.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sp2: file(relativePath: { eq: "sp2_sponsors.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sp3: file(relativePath: { eq: "sp3_sponsors.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sp4: file(relativePath: { eq: "sp4_sponsors.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sp5: file(relativePath: { eq: "sp5_sponsors.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const sponsorsArray = [
    sponsorsImagesData.sp1.childImageSharp.fluid,
    sponsorsImagesData.sp2.childImageSharp.fluid,
    sponsorsImagesData.sp3.childImageSharp.fluid,
    sponsorsImagesData.sp4.childImageSharp.fluid,
    sponsorsImagesData.sp5.childImageSharp.fluid,
  ];
  return (
    <Container maxWidth="md" className="container_sponsors">
      <Box className="outerBox_sponsors">
        <Box className="gridContainer_sponsors">
          <Grid container columns={10}>
            {sponsorsArray.map((item, idx) => {
              return (
                <Grid
                  item
                  key={idx}
                  xl={2}
                  lg={2}
                  md={2}
                  sm={2}
                  xs={12}
                  className="gridItem_sponsors"
                >
                  <Img className="spImage_spnsors" fluid={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
