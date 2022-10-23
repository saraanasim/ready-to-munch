import { Container, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const BlogPageBanner = () => {
  const blogPageBanner = useStaticQuery(graphql`
    query MyBlogPageQuery {
      banner_img: file(relativePath: { eq: "sauce_fries_blogs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container
      maxWidth="lg"
      style={{
        position: "relative",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "200px",
      }}
    >
      <Typography
        style={{
          fontSize: "normal normal normal 18px/24px Segoe UI",
          letterSpacing: "9px",
          color: "#39b54a",
          textTransform: "uppercase",
          marginBottom: "10px",
          background: "rgb(57, 181, 74,0.2)",
          borderRadius: "31px",
          color: "#39B54A",
          padding: "15px 25px",
        }}
      >
        Blogs
      </Typography>
      <Typography
        style={{
          fontSize: "5rem",
          fontWeight: 600,
          letterSpacing: "0px",
          color: "#000000",
        }}
      >
        Our Blogs
      </Typography>
      <Img
        style={{
          maxWidth: "200px",
          width: "100%",
          objectFit: "contain",
          position: "absolute",
          right: "0px",
          top: "50%",
        }}
        fluid={blogPageBanner.banner_img.childImageSharp.fluid}
      />
    </Container>
  )
}

export default BlogPageBanner
