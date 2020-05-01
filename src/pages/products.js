import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/Card"

export default function Products({ data }) {
  return (
    <Layout>
      <SEO title="Products"/>
      <div className="hero-product is-large is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Products</h1>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card-wrapper">
            {data.allSanityCategory.edges.map(({ node: category }) => (
              <Card
                key={category.id}
                to={"/products/" + category.slug.current}
                heroImage={category.heroImage.image.asset.fluid}
                alt={category.heroImage.alternativeText}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query {
    allSanityCategory(
      filter: { products: { elemMatch: { id: { ne: "null" } } } }
    ) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          heroImage {
            image {
              asset {
                fluid(maxWidth: 1900) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            alternativeText
          }
        }
      }
    }
  }
`