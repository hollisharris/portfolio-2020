import React from "react"
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from "../components/layout"
import Mosaic from "../components/Mosaic"
import ContactCTA from "../components/ContactCTA"

export const query = graphql`
{
  allStoryblokEntry(filter: {full_slug: {regex: "/^works//", ne: "works/"}, field_hide_boolean: {ne: true}}) {
    edges {
      node {
        name
        full_slug
        content
      }
    }
  }
}
`

export default function Work({data}) {
  const doc = data.allStoryblokEntry

  const workData = doc.edges.map(item => {
    const content = JSON.parse(item.node.content)
    return ({
      _uid: content._uid,
      teaser: content.hero_teaser,
      headline: content.hero_headline,
      category: content.category,
      fullSlug: item.node.full_slug,
      thumbnail: content.thumbnail
    })
  })

  return (
    <Layout className="works">
      <SEO title={`Works`} description={`Various website, app, branding, illustration work of Hollis Harris`}/>
      <section className="hero-text container">
          <h1>Works.</h1>
      </section>

      <section className="work-featured-work container">
        <Mosaic work={workData}/>
      </section>

      <ContactCTA />

    </Layout>
  )
}
