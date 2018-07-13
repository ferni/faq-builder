import React from "react";

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }, pageIndex) =>
        <div>
        <h1 key={pageIndex}><a href={node.fields.slug}>{node.fields.slug}</a></h1>
        <ul>
        {node.headings.map(({ value }, headingIndex) =>
          <li key={headingIndex}><a href={`${node.fields.slug}#${value}`}>{value}</a></li>
        )}
        </ul>
        </div>
      )}
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
        }
      }
    }
  }
`;
