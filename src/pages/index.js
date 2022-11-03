import React from "react"

import { ServicesSection } from "../components/services-section/ServicesSection"
import { SponsorsSection } from "../components/sponsors-section/SponsorsSection"
import { StatsSection } from "../components/stats-section/StatsSection"
import { HomeSection } from "../components/home-section/HomeSection"
import { ContactSection } from "../components/contact-section/ContactSection"
import { FeaturesSection } from "../components/features-section/FeaturesSection"
import { BlogsSection } from "../components/blogs-section/BlogsSection"
import AppLayout from "../layouts/app-layout/AppLayout"
import "../styles/page-styles.scss"
import { TestimonialsSection } from "../components/testimonials-section/TestimonialsSection"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import Navbar from "../components/navbar/Navbar"

const THEME = createTheme({
  typography: {
    fontFamily: `"Segoe UI", "Poppins", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

const Index = props => {
  const { data, navigate, location } = props
  const posts = data.allMdx.edges
  console.log("All Blogs", posts)
  return (
    <ThemeProvider theme={THEME}>
      <AppLayout>
        <section className="sectionContainerHome" id="home">
          <Navbar />
          <HomeSection />
        </section>
        <section className="sectionContainerServices" id="services">
          <ServicesSection />
        </section>

        <section className="sectionContainerFeatures" id="features">
          <StatsSection />
          <FeaturesSection />
        </section>
        <section className="sectionContainerBlogs" id="blogs">
          <BlogsSection page="home" />
        </section>
        {/* <section className="sectionContainerSponsors">
        <SponsorsSection />
      </section> */}
        <section className="sectionContainerTestimonials" id="testimonials">
          <TestimonialsSection />
        </section>
        <section className="sectionContainerContact" id="contact">
          <ContactSection />
        </section>
      </AppLayout>
    </ThemeProvider>
  )
}

export default Index
export const pageQuery = graphql`
  {
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
`
