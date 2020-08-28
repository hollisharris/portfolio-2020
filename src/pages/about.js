import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout className="about">
      <SEO title={`About`} description={`About the designer, developer, educator and person of Hollis Harris`}/>
      
      <div className="container hero-text">
        <h1>For now I remain a mystery.</h1>
        <p>Well at least until I write more about myself.</p>
      </div>


    </Layout>
  )
}
