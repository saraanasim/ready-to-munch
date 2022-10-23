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
            textAlign: "left", // 4
          },
        }}
      >
        {blogs.map((item, idx) => {
          return (
            <Grid container>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Img
                  fluid={item.node.frontmatter.image.childImageSharp.fluid}
                  style={{
                    width: "100%",
                    maxWidth: "572px",
                    maxHeight: "375px",
                  }}
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Paper
                  sx={{
                    width: "100%",
                    border: "none",
                    boxShadow: "none",
                  }}
                  className="blog_page__paper"
                >
                  <Typography>{item.node.frontmatter.title}</Typography>

                  <Typography className="testimonial_comments">
                    {item.node.frontmatter.description}
                  </Typography>
                  <Typography className="testimonial_comments">
                    {`${calculateElapsedTime(
                      moment(item.node.frontmatter.date)
                    )} minutes ago`}
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
