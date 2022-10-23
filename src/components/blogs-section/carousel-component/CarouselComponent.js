import React from "react"
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel"
import { Paper, Button, Box, IconButton } from "@mui/material"
import "./carousel-component.scss"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import defaultImg from "../../../assets/images/cardSkeleton.gif"

import burgerImg from "../../../assets/images/burgerImage_blogs.png"
import fastFoodImg from "../../../assets/images/fastfoodImg_blogs.png"
import pizzaImg from "../../../assets/images/pizzaImg_blogs.png"
import "react-multi-carousel/lib/styles.css"
import useWindowDimensions from "../../../hooks/useWindowDimensions"

import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { BsClock } from "react-icons/bs"

const CarouselComponent = ({ blogs }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 840, min: 0 },
      items: 1,
    },
  }
  // var blogs = [
  //   {
  //     title: "Pizza",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: pizzaImg,
  //     uploadTime: 30,
  //   },
  //   {
  //     title: "Burgers",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: burgerImg,
  //     uploadTime: 12,
  //   },
  //   {
  //     title: "Fast Food",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: fastFoodImg,
  //     uploadTime: 19,
  //   },
  //   {
  //     title: "Pizza",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: pizzaImg,
  //     uploadTime: 30,
  //   },
  //   {
  //     title: "Burgers",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: burgerImg,
  //     uploadTime: 12,
  //   },
  //   {
  //     title: "Fast Food",
  //     description:
  //       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod vero dolores et ea rebum. Stet sed diam nonumy eirmod vero.",
  //     img: fastFoodImg,
  //     uploadTime: 19,
  //   },
  // ];
  return (
    <Box className="carousel_wrapper">
      <Carousel
        className="carousel_itself"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        renderButtonGroupOutside={true}
        arrows={false}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customButtonGroup={<ButtonGroup />}
      >
        {blogs.map((blog, i) => (
          <Item key={i} blog={blog} />
        ))}
      </Carousel>
    </Box>
  )
}

export default CarouselComponent
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest
  return (
    <div className="btn_group_carousel_custom">
      <IconButton
        onClick={() => {
          previous()
        }}
      >
        <IoIosArrowDropleftCircle className="btn_icon_carousel" />
      </IconButton>
      <IconButton
        onClick={() => {
          next()
        }}
      >
        <IoIosArrowDroprightCircle className="btn_icon_carousel" />
      </IconButton>
    </div>
  )
}

function Item({ blog }) {
  //   const cardImagesData = useStaticQuery(graphql`
  //     query MyCardQuery {
  //       default_img: file(relativePath: { eq: "cardSkeleton.gif" }) {
  //         childImageSharp {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `);

  const { width, height } = useWindowDimensions()
  return (
    <Card
      sx={{
        maxWidth: width >= 464 ? 300 : "100%",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: 2,
        margin: "0px auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          height="140"
          width="100%"
          //   style={{ width: "100%" }}
        >
          <Img fluid={blog.node.frontmatter.image.childImageSharp.fluid} />
        </CardMedia>
        <CardContent>
          <Typography id="blog_title">{blog.node.frontmatter.title}</Typography>
          <Typography id="blog_desc">
            {blog.node.frontmatter.description}
          </Typography>
          <div className="time_container_card">
            <BsClock className="btn_icon_card" />
            <Typography id="blog_uploadTime">{`${blog.node.frontmatter.date} minutes ago`}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
