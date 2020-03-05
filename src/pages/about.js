import React from "react";
import Layout from "../components/Layout";
import { graphql } from 'gatsby';
import SEO from "../components/SEO";
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="about us" styleClass="about-background" />
    <Info />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "about-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage;
