import { Box, Container, Typography } from "@mui/material"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { SponsorsSection } from "../sponsors-section/SponsorsSection"
import "./blogs-section.scss"
import CarouselComponent from "./carousel-component/CarouselComponent"
export const BlogsSection = ({ page }) => {
  const blogsData = useStaticQuery(graphql`
    query MyBlogsQuery {
      sauce_img: file(relativePath: { eq: "sauce_fries_blogs.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMdx: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date
              title
              description
              image {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log("Data isss", blogsData.allMdx.edges)
  return (
    <Box className="container_blogs">
      {page === "home" ? (
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
              fluid={blogsData.sauce_img.childImageSharp.fluid}
            />

            <Typography className="sectionTitle_blogs">Blogs</Typography>
          </div>
        </div>
      ) : null}
      {page === "blog" ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="section_container_blogs">
            <Typography className="sectionTitle_blogs">Blogs</Typography>
          </div>
        </div>
      ) : null}
      {page == "home" ? (
        <Typography className="title_blogs">Our Blogs</Typography>
      ) : null}
      {page == "blog" ? (
        <Typography className="title_blogs">Related Blogs</Typography>
      ) : null}

      <Container maxWidth="lg" sx={{ padding: "50px 0px" }}>
        <CarouselComponent blogs={blogsData.allMdx.edges} />
      </Container>
      <Link to="/blog/">
        <Typography
          sx={{ color: "#39B54A", fontWeight: 700, textAlign: "center" }}
        >
          Read More
        </Typography>
      </Link>
      {page === "home" ? <SponsorsSection /> : null}
    </Box>
  )
}
