import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscribeForm from "../components/subscribe"
import ShareButtons from "../components/sharebuttons"


const BlogPost = ({ data, pageContext }) => (
  <Layout>
    <section className="blogpost" id="top">
      <div className="container">
        <div className="mx-8">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <h1>data.mdx.frontmatter.title</h1>
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Pencil emoji" className="mx-1">
                ✏️️
              </span>
              data.mdx.frontmatter.author
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Calendar emoji" className="mx-1">
                📅
              </span>
              data.mdx.frontmatter.date
            </div>
            <div className="col-auto tagline">
              <span role="img" aria-label="Eyes emoji" className="mx-1">
                👀
              </span>
              data.mdx.timeToRead mins
            </div>
          </div>

          <ShareButtons
            title="data.mdx.frontmatter.title"
            url="data.site.siteMetadata.url/blog/data.mdx.slug"
            twitterHandle="data.site.siteMetadata.title"
          />
          <img
            className="featured-image"
            // fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div className="content">
          </div>

          <div className="row mt-5">
            <div className="col-6">
              {pageContext.previous === false ? null : (
                <>
                  {pageContext.previous && (
                    <a
                      to={pageContext.previous.fields.slug}
                      className="link"
                      key={pageContext.previous.fields.slug}
                    >
                      <span
                        role="img"
                        aria-label="Left pointing emoji"
                        className="mr-1"
                      >
                        👈
                      </span>
                      Previous
                    </a>
                  )}
                </>
              )}
            </div>
            <div className="col-6 text-right">
              {pageContext.next === false ? null : (
                <>
                  {pageContext.next && (
                    <a
                      to={pageContext.next.fields.slug}
                      className="link"
                      key={pageContext.next.fields.slug}
                    >
                      {" "}
                      <span
                        role="img"
                        aria-label="Right pointing emoji"
                        className="mr-1"
                      >
                        👉
                      </span>
                      Next
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </section>
  </Layout>
)

export default BlogPost
