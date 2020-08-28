import React, { Suspense } from "react"
import { render } from 'storyblok-rich-text-react-renderer';

import SEO from "../components/seo"
import Layout from "../components/layout"

import TextBlock from "../components/TextBlock"
import Blockquote from "../components/Blockquote"
import ContactCTA from "../components/ContactCTA"
const ImageColumns = React.lazy(() => import('../components/ImageColumns'))
const StickySection = React.lazy(() => import('../components/StickySection'))
const Results = React.lazy(() => import('../components/Results'))

export const query = graphql`
  query($full_slug: String!) {
    storyblokEntry(full_slug: {eq: $full_slug}) {
      content
      position
    },
    allStoryblokEntry(filter: {full_slug: {regex: "/^case-studies//", ne: "case-studies/"}, field_hide_boolean: {ne: true}}) {
      edges {
        node {
          name
          full_slug
          content
          position
        }
      }
    }
  }
`

export default function WorkTemplate({data}) {
    const doc = JSON.parse(data.storyblokEntry.content);
    console.log(doc)

    // const roles = doc.roles.map((role, index) => {
    //   return <li key={index} >{role}</li>
    // })

    // const pageContent = doc.components.map(component => {
    //   switch(component.component) {
    //     case 'image_columns':
    //       return <ImageColumns  key={component._uid} columns={component.column_group}/>
    //     default:
    //       return (
    //       <TextBlock
    //         position={'center'}
    //         className="d-flex"
    //         teaser={component.teaser}>
    //           {render(component.content)}
    //       </TextBlock>);
    //   }
    // })

    return (
        <Layout className="work">
          <SEO title={doc.seo.title || doc.hero_teaser} description={doc.seo.description || doc.hero_headline}/>
            <section className="hero-work">
                <div className="container">
                  <div className="content">
                    <h2 className="teaser">{doc.hero_teaser}</h2>
                    <h1 className="h2">{doc.page_headline || doc.hero_headline}</h1>
                  </div>
                </div>
                {/* <div className="bg" style={{backgroundImage: `url(${doc.hero_device.filename})`, backgroundSize: doc.category === 'App' ? 'contain' : 'cover'}}></div> */}
            </section>

            {/* <section className="intro">
                <div className="container d-flex">
                    <div className="role">
                        <h2 className="teaser">What I did</h2>
                        <ul>
                            {roles}
                        </ul>
                    </div>
                    <div className="about">
                        <p className="large">
                            {doc.hero_description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="work-content">
              <div className="container d-flex">
                {pageContent}
              </div>
            </section> */}

            <section className="work-content">
              <div className="container d-flex">
                <div className="content">
                  {render(doc.page_content, {
                      blokResolvers: {
                          ['blockquote']: (props) => <Blockquote quote={props.quote} author={props.author} />,
                          ['richtext']: (props) => <div className="breakout"><TextBlock teaser={props.teaser}position={props.position} className="d-flex">{render(props.content)}</TextBlock></div>,
                          ['image_columns']: (props) => <Suspense fallback={<div>Loading...</div>}><div className="breakout"><div className="container"><ImageColumns columns={props.column_group}/></div></div></Suspense>,
                          ['sticky_section']: (props) => <Suspense fallback={<div>Loading...</div>}><div className="breakout"><StickySection position={props.content_position} sticky={props.sticky} content={render(props.content)} media={props.image}/></div></Suspense>,
                          ['results']: (props) => <Suspense fallback={<div>Loading...</div>}><div className="breakout"><Results teaser={props.teaser} headline={props.headline} description={render(props.description)} results={props.results}/></div></Suspense>
                      }
                  })}
                </div>
              </div>
            </section>

            <ContactCTA />
        

        </Layout>
    )
}
