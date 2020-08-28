import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import TextBlock from "../components/TextBlock"
import Mosaic from "../components/Mosaic"
import SolidChevronRightIcon from "../components/icons/SolidChevronRight"
import ContactCTA from "../components/ContactCTA"

export const query = graphql`
{
  storyblokEntry(slug: { eq: "home" }) {
    content
  }
}
`

export default function Home({data}) {
 
  const doc = JSON.parse(data.storyblokEntry.content);

  const featuredWorkData = doc.featured_work.map(item => {
    return ({
      _uid: item.content._uid,
      teaser: item.content.hero_teaser,
      headline: item.content.hero_headline,
      category: item.content.category,
      fullSlug: item.full_slug,
      thumbnail: item.content.thumbnail,
    })
  })

  return (
    <Layout className="home">
      <SEO title={doc.seo.title || doc.hero_teaser} description={doc.seo.description || doc.hero_headline}/>

      <section className="home-hero container">
        <div className="hero-content">
          <h2 className="teaser text-light">{doc.hero_teaser}</h2>
          <p className="h1 text-dark">{doc.hero_headline}</p>
        </div>
      </section>

      <section className="home-about container d-flex">
        <TextBlock
          position={doc.about[0].position}
          className="d-flex"
          teaser={doc.about[0].teaser}>
          <h1 className="h2 text-dark">I design and build custom brands, websites and apps.</h1>
          <p className="text-light">Hi, my name is Hollis Harris. I’m a versatile designer who helps organizations think smarter, move quicker and dream bigger.</p>
          <p><Link to="/about" className="icon-left icon-chevron-right text-dark"><SolidChevronRightIcon /> About me</Link></p>
        </TextBlock>
      </section>

      <section className="home-featured-work container">
        <h2>{doc.featured_work_headline}</h2>
        <Mosaic work={featuredWorkData}/>
      </section>

      <ContactCTA />


    </Layout>
  )
}
