import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
