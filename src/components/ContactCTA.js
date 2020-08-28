import React from "react"
import { Link } from "gatsby"

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container text-center">
          <h2 className="teaser text-light">Ready to start?</h2>
          <p className="h1"><Link className="line-hover" to="/contact">Let's talk.</Link></p>
      </div>
    </section>
  )
}