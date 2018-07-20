import React from "react";

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html, frontmatter } = markdownRemark;
  return (
    <div>
      <div id="jumbo">
        <div id="jumbo-content">
          <div className="centered">
            <span id="jumbo-legend"><a href="../" title="Back to FAQ index">FAQ</a>: {frontmatter.title}</span>
          </div>
        </div>
      </div>
      <div id="main-content" className="centered">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;