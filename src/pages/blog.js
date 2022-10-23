import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SearchPosts from "../components/searchPosts"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import AppLayout from "../layouts/app-layout/AppLayout"
const Blog=(props)=> {
  const { data, navigate, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const localSearchBlog = data.localSearchBlog
 
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
         <SEO title="All posts" />
        
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
         </AppLayout>
       
      </ThemeProvider>
     
    )

}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
