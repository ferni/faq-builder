import React from "react";
const slugs = require("github-slugger")();

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  return (
    <div>
      <div id="jumbo">
        <div id="jumbo-content">
          <div className="centered"><span id="jumbo-legend">FAQ</span></div>
        </div>
      </div>
      <div id="main-content" className="centered">
        {data.allMarkdownRemark.edges
          .filter(({node}) => node.frontmatter.title)
          .map(({ node }, pageIndex) =>
            <div key={pageIndex}>
              <h1><a href={node.fields.slug}>{node.frontmatter.title || node.fields.slug}</a></h1>
              <ul>
              {node.headings.map(({ value }, headingIndex) =>
                <li key={'heading' + headingIndex}><a href={`${node.fields.slug}#${slugs.slug(value)}`}>{value}</a></li>
              )}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query FaqIndex {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          headings {
            value
            depth
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
