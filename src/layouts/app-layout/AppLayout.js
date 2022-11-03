import { Box, Container, Grid, IconButton, Typography } from "@mui/material"
import React from "react"
import Navbar from "../../components/navbar/Navbar"
import "./app-layout.scss"
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const AppLayout = props => {
  const footerImagesData = useStaticQuery(graphql`
    query MyFooterQuery {
      chicken_img: file(relativePath: { eq: "chicken_contact.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo_img: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visa_img: file(relativePath: { eq: "visaLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      easypaisa_img: file(relativePath: { eq: "easypaisaLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jazzcash_img: file(relativePath: { eq: "jazzcashLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mastercard_img: file(relativePath: { eq: "mastercardLogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="app__layout">
      <Box className="inner__container">
        {props.children}
        <footer>
          <Container className="footer__container">
            <Box
              style={{
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px 0px",
              }}
            >
              <Img
                style={{
                  width: "100%",

                  maxWidth: "100px",
                  position: "absolute",
                  right: "0px",
                  bottom: "0px",
                }}
                fluid={footerImagesData.chicken_img.childImageSharp.fluid}
              />
              <Img
                style={{
                  width: "100%",

                  maxWidth: "100px",
                }}
                fluid={footerImagesData.logo_img.childImageSharp.fluid}
              />
              <Typography>
                KPITB, 134 Industrial Estate Hayatabad,
                <br /> Peshawar, KPK, Pakistan – 25000
              </Typography>
              <Box style={{ display: "flex" }}>
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
              <Typography>Powered by</Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                width: "100%",
                borderTop: "1px solid rgb(0,0,0,0.7)",
                padding: "50px 0px",
              }}
            >
              <Grid container style={{ width: "100%" }}>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-start",
                      xl: "flex-start",
                    },
                    textAlign: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "left",
                      xl: "left",
                    },
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      font: "normal normal normal 18px/24px Segoe UI",
                      letterSpacing: "0px",
                      color: "#000000",
                      width: "100%",
                    }}
                  >
                    &copy; Copyright {new Date().getFullYear()}. Ready to Munch
                    - All Rights Reserved
                  </Typography>
                </Grid>
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: { sm: "center", md: "flex-end" },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "60px",
                        padding: "20px",
                        border: "1px solid #707070",
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          textAlign: "center",
                          font: "normal normal bold 10px/13px Montserrat",
                          letterSpacing: "0.25px",
                          color: "#000",
                          textTransform: "uppercase",
                        }}
                      >
                        CASH ON <br /> DELIVERY
                      </Typography>
                    </Box>

                    <Box className="footer_brand_image_box">
                      <Img
                        className="footer_brand_image"
                        fluid={footerImagesData.visa_img.childImageSharp.fluid}
                      />
                    </Box>

                    <Box className="footer_brand_image_box">
                      <Img
                        className="footer_brand_image"
                        fluid={
                          footerImagesData.mastercard_img.childImageSharp.fluid
                        }
                      />
                    </Box>

                    <Box className="footer_brand_image_box">
                      {" "}
                      <Img
                        className="footer_brand_image"
                        fluid={
                          footerImagesData.jazzcash_img.childImageSharp.fluid
                        }
                      />
                    </Box>

                    <Box className="footer_brand_image_box">
                      <Img
                        className="footer_brand_image"
                        fluid={
                          footerImagesData.easypaisa_img.childImageSharp.fluid
                        }
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </footer>
      </Box>
    </div>
  )
}

export default AppLayout
