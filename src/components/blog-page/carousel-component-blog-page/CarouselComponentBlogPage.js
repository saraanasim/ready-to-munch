import React from "react"

import Carousel from "react-material-ui-carousel"
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import TripOriginIcon from "@mui/icons-material/TripOrigin"

import { AiFillStar } from "react-icons/ai"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./carousel-component-blog-page.scss"
import { calculateElapsedTime } from "../../../utils/utilityFunctions"
import moment from "moment"

const CarouselComponentBlogPage = ({ blogs }) => {
  console.log("Blogs in carousel", blogs)
  return (
    <Box className="carousel_wrapper_blog_page">
      <Carousel
        className="actual__carousel__blog_page"
        fullHeightHover={false}
        IndicatorIcon={<TripOriginIcon style={{ fill: "#39B54A" }} />}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "#39B54A", // 2
            fill: "#39B54A",
            color: "#39B54A",
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "50px", // 5
            textAlign: "right", // 4
            position: "absolute",
            bottom: "0px",
            right: "0px",
            zIndex: 10,
            padding: "0px 20px 20px 0px",
          },
        }}
      >
        {blogs.map((item, idx) => {
          return (
            <Grid container>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={12}
                // sx={{ maxHeight: "400px" }}
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "386px",
                    maxHeight: "260px",
                    padding: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <Img
                    fluid={item.node.frontmatter.image.childImageSharp.fluid}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Paper
                  sx={{
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  className="blog_page__paper"
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        font: "normal normal normal 18px/24px Segoe UI",
                        letterSpacing: "0px",
                        color: "#39B54A",
                      }}
                    >
                      {item.node.frontmatter.blogAuthor}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        font: "normal normal 600 48px/64px Segoe UI",
                        letterSpacing: "0px",
                        color: "#000000",
                      }}
                    >
                      {item.node.frontmatter.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "left",
                      font: "normal normal normal 1rem Segoe UI",
                      letterSpacing: "0px",
                      color: "#808080",
                      marginBottom: "8px",
                      wordSpacing: "0.001rem",
                    }}
                    className="testimonial_comments"
                  >
                    {item.node.frontmatter.description}
                  </Typography>
                  <Typography className="testimonial_comments">
                    {`${calculateElapsedTime(
                      moment(item.node.frontmatter.date)
                    )} ago`}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          )
        })}
      </Carousel>
    </Box>
  )
}

export default CarouselComponentBlogPage
