import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./services-section.scss";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
export const ServicesSection = () => {
  const servicesImagesData = useStaticQuery(graphql`
    query MyServicesQuery {
      delivery_image: file(relativePath: { eq: "delivery_services.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pickup_image: file(relativePath: { eq: "pickup_services.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dinein_image: file(relativePath: { eq: "dinein_services.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tommato_image: file(relativePath: { eq: "tommatoImg_services.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Box className="container_services">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="section_container_services">
          <Img
            className="tomattoImage_services"
            fluid={servicesImagesData.tommato_image.childImageSharp.fluid}
          />

          <Typography className="sectionTitle_services">SERVICES</Typography>
        </div>
      </div>

      <Typography className="title_services">
        OUR AWESOME <br /> SERVICES
      </Typography>
      <Container maxWidth="md" className="gridContainer_services">
        <Grid
          container
          justifyContent="center"
          spacing={3}
          sx={{ padding: 0, margin: 0 }}
        >
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className="gridItem_services"
          >
            <Box className="boxContainer_services">
              <Img
                className="icon_services"
                fluid={servicesImagesData.delivery_image.childImageSharp.fluid}
              />
              <Typography id="cardText_services">Delivery</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className="gridItem_services"
          >
            <Box className="boxContainer_services">
              <Img
                className="icon_services"
                fluid={servicesImagesData.pickup_image.childImageSharp.fluid}
              />
              <Typography id="cardText_services">Pick Up</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className="gridItem_services"
          >
            <Box className="boxContainer_services">
              <Img
                className="icon_services"
                fluid={servicesImagesData.dinein_image.childImageSharp.fluid}
              />
              <Typography id="cardText_services">Dine In</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
