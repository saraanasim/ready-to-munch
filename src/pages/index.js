import React from "react";

import { ServicesSection } from "../components/services-section/ServicesSection";
import { SponsorsSection } from "../components/sponsors-section/SponsorsSection";
import { StatsSection } from "../components/stats-section/StatsSection";
import { HomeSection } from "../components/home-section/HomeSection";
import { ContactSection } from "../components/contact-section/ContactSection";
import { FeaturesSection } from "../components/features-section/FeaturesSection";
import { BlogsSection } from "../components/blogs-section/BlogsSection";
import AppLayout from "../layouts/app-layout/AppLayout";
import "../styles/page-styles.scss";
import { TestimonialsSection } from "../components/testimonials-section/TestimonialsSection";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const THEME = createTheme({
  typography: {
    fontFamily: `"Segoe UI", "Poppins", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const Index = () => {
  return (
    <ThemeProvider theme={THEME}>
      <AppLayout>
        <section className="sectionContainerHome" id="home">
          <HomeSection />
        </section>
        <section className="sectionContainerServices" id="services">
          <ServicesSection />
        </section>
        {/* <section className="sectionContainerStats">
        <StatsSection />
      </section> */}
        <section className="sectionContainerFeatures" id="features">
          <StatsSection />
          <FeaturesSection />
        </section>
        <section className="sectionContainerBlogs" id="blogs">
          <BlogsSection />
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
  );
};

export default Index;
