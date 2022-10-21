import React from "react";

import Carousel from "react-material-ui-carousel";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

import { AiFillStar } from "react-icons/ai";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./carousel-component-testimonials.scss";

const CarouselComponent = () => {
  const testimonialsCarouselImagesData = useStaticQuery(graphql`
    query MyTestimonialsCarouselQuery {
      avatar_img: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  var testimonials = [
    {
      name: "Jennifer Lee",
      comments:
        "consetetur sadipscing elitr, sed diam nonumy eirmod vero, Lorem ipsum dolor sit amet,  dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
      img: testimonialsCarouselImagesData.avatar_img.childImageSharp.fluid,
      rating: 4.2,
    },
    {
      name: "Christian Bale",
      comments:
        "sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  nonumy eirmod vero.",
      img: testimonialsCarouselImagesData.avatar_img.childImageSharp.fluid,
      rating: 5,
    },
    {
      name: "Christopher Nolan",
      comments:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
      img: testimonialsCarouselImagesData.avatar_img.childImageSharp.fluid,
      rating: 4.9,
    },
  ];
  return (
    <Box className="carousel_wrapper_testimonials">
      <Carousel
        className="actual__carousel__testimonials"
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
        {testimonials.map((item, idx) => {
          return (
            <Paper
              sx={{
                width: "100%",
                border: "none",
                boxShadow: "none",
              }}
              className="testimonials__paper"
            >
              <Avatar
                className="testimonials_avatar_container_upper"
                alt={item.name}
              >
                <Img className="testimonials_avatar" fluid={item.img} />
              </Avatar>
              <Typography className="testimonial_comments">
                {item.comments}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Avatar
                  className="testimonials_avatar_container"
                  alt={item.name}
                >
                  <Img className="testimonials_avatar" fluid={item.img} />
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    flexGrow: 1,
                  }}
                >
                  <Typography className="testimonial_name">
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AiFillStar className="testimonial_star" />
                    <Typography
                      className="testimonial_rating"
                      sx={{ flexGrow: 1 }}
                    >
                      {item.rating}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
