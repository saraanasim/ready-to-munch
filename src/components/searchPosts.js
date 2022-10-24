import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material"
import { BsClock } from "react-icons/bs"
import { calculateElapsedTime } from "../utils/utilityFunctions"
import moment from "moment"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { BlogCard } from "./blogs-section/carousel-component/CarouselComponent"
import { Box } from "@mui/system"
import CarouselComponentBlogPage from "./blog-page/carousel-component-blog-page/CarouselComponentBlogPage"
import { ContactSection } from "./contact-section/ContactSection"
import PaginationComponent from "./Pagination/PaginationComponent"
const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date
      const title = node.title || node.slug
      const description = node.description
      const excerpt = node.excerpt
      const slug = node.slug

      return (
        <div key={slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={`/blog${slug}`}>
              {title}
            </Link>
          </h3>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
        </div>
      )
    })
  ) : (
    <p style={{ textAlign: "center" }}>
      Sorry, couldn't find any posts matching this search.
    </p>
  )

const AllPosts = ({ posts }) => {
  return (
    <Grid container spacing={3} style={{ marginBottom: "50px" }}>
      {posts.map(post => {
        console.log("Each blog i all posts", post)
        // const title = node.frontmatter.title || node.fields.slug
        return (
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <BlogCard blog={post} />
          </Grid>
        )
      })}
    </Grid>
  )
}

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  )
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentBlogs = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#fff, #f9f9f9 99%)",
        maxWidth: "1000px",
        width: "100%",
        margin: "0px auto",
        borderRadius: "20px",
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <CarouselComponentBlogPage blogs={posts} />

        <AllPosts posts={currentBlogs} />
        <PaginationComponent
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Container>
      <section className="sectionContainerContact">
        <ContactSection />
      </section>
      {/* <SearchBar>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            )
            setQuery(e.target.value)
          }}
        />
      </SearchBar> */}
      {/* {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />} */}
    </Box>
  )
}

export default SearchPosts
