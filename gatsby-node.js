const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workPageEntry = path.resolve('src/templates/work-template.js')

    resolve(
      graphql(
        `{
            workPages: allStoryblokEntry(filter: {full_slug: {regex: "/^works//", ne: "works/"}}) {
              edges {
                node {
                  name
                  full_slug
                  content
                }
              }
            }
          }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const case_studies = result.data.workPages.edges
        case_studies.forEach((entry, index) => {
          createPage({
            path: `/${entry.node.full_slug}`,
            component: workPageEntry,
            context: {
                full_slug: entry.node.full_slug
            }
          })
        })
      })
    )
  })
}