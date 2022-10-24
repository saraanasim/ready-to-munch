import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { BsClock } from "react-icons/bs"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import AppLayout from "../layouts/app-layout/AppLayout"
import { Avatar, Box, Container, Typography } from "@mui/material"
import Img from "gatsby-image"
import { calculateElapsedTime } from "../utils/utilityFunctions"
import moment from "moment"
import { BlogsSection } from "../components/blogs-section/BlogsSection"
import { ContactSection } from "../components/contact-section/ContactSection"
import Navbar from "../components/navbar/Navbar"

const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const THEME = createTheme({
    typography: {
      fontFamily: `"Segoe UI", "Poppins", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  })

  return (
    <ThemeProvider theme={THEME}>
      <AppLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Box
          style={{
            backgroundImage: "linear-gradient(#fff, #f9f9f9 99%)",
            borderRadius: "20px",
          }}
        >
          <Navbar />
          <Container
            maxWidth="md"
            sx={{ backgroundColor: "#fff", marginTop: "100px" }}
          >
            <Box sx={{ padding: "20px", width: "100%", height: "100%" }}>
              <Box sx={{ width: "100%", height: "100%", maxHeight: "300px" }}>
                <Img
                  fluid={post.frontmatter.image.childImageSharp.fluid}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    maxHeight: "300px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  textAlign: "left",
                  font: "normal normal bold 48px/64px Segoe UI",
                  letterSpacing: "0px",
                  color: "#000000",
                  margin: "20px 0px",
                }}
              >
                {post.frontmatter.title}
              </Typography>

              <MDXRenderer>{post.body}</MDXRenderer>
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{
                    height: "90px",
                    width: "90px",
                  }}
                >
                  <Img
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    fluid={
                      post.frontmatter.blogAuthorImage.childImageSharp.fluid
                    }
                  />
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "left",
                      font: "normal normal normal 1.1rem Segoe UI",
                      letterSpacing: "0px",
                      color: "#39B54A",
                      marginBottom: "10px",
                    }}
                  >
                    {post.frontmatter.blogAuthor}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <BsClock style={{ fontSize: "15px", fill: "#000" }} />
                    <Typography
                      sx={{
                        textAlign: "left",
                        font: "normal normal normal 0.9rem Segoe UI",
                        letterSpacing: "0px",
                        color: "#000",
                        marginLeft: "10px",
                      }}
                    >{`${calculateElapsedTime(
                      moment(post.frontmatter.date)
                    )} ago`}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Container
          maxWidth="md"
          sx={{ backgroundColor: "#fff", marginTop: "100px" }}
        >
          <Box sx={{ padding: "20px", width: "100%", height: "100%" }}>
            <Box sx={{ width: "100%", height: "100%", maxHeight: "300px" }}>
              <Img
                fluid={post.frontmatter.image.childImageSharp.fluid}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  maxHeight: "300px",
                }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "left",
                font: "normal normal bold 48px/64px Segoe UI",
                letterSpacing: "0px",
                color: "#000000",
                margin: "20px 0px",
              }}
            >
              {post.frontmatter.title}
            </Typography>

            <MDXRenderer>{post.body}</MDXRenderer>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Avatar
                style={{
                  height: "90px",
                  width: "90px",
                }}
              >
                <Img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  fluid={post.frontmatter.blogAuthorImage.childImageSharp.fluid}
                />
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  flexGrow: 1,
                }}
              >
                <Typography
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 1.1rem Segoe UI",
                    letterSpacing: "0px",
                    color: "#39B54A",
                    marginBottom: "10px",
                  }}
                >
                  {post.frontmatter.blogAuthor}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BsClock style={{ fontSize: "15px", fill: "#000" }} />
                  <Typography
                    sx={{
                      textAlign: "left",
                      font: "normal normal normal 0.9rem Segoe UI",
                      letterSpacing: "0px",
                      color: "#000",
                      marginLeft: "10px",
                    }}
                  >{`${calculateElapsedTime(
                    moment(post.frontmatter.date)
                  )} ago`}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <BlogsSection page="blog" />
        <section className="sectionContainerContact">
          <ContactSection />
        </section>
      </AppLayout>
    </ThemeProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date
        description
        blogAuthor
        blogAuthorImage {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
`
