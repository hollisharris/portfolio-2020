import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import TextBlock from "../components/TextBlock"

export default function Contact() {
  return (
    <Layout className="contact">
        <SEO title={`Contact`} description={`Email and phone number information for Hollis Harris`}/>        

        <section className="contact-info container d-flex">
        <TextBlock
          position="left"
          className="d-flex"
          teaser="Contact me">

            <div className="contact-item">
                <p className="h2 text-dark"><a className="line-hover" href="mailto:madebyhollis@gmail.com">madebyhollis@gmail.com</a></p>
                <p className="text-light">Start a project or just chat.</p>
            </div>

            <div className="contact-item">
                <p className="h2 text-dark"><a className="line-hover" href="tel:8323310529">832-331-0529</a></p>
                <p className="text-light">Call or text anytime.</p>
            </div>
        </TextBlock>
      </section>


    </Layout>
  )
}
