import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`;

const PostTitle = styled.h3`
  margin-bottom: 10px;
`;

const PostDate = styled.span`
  color: #bbb;
`;

export default ({ data }) => (
  <div>
    <Title>Bini's Awesome Reviews</Title>
    <h4>{data.allMarkdownRemark.totalCount} Reviews</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <PostTitle>
          {node.frontmatter.title}{" "}
          <PostDate>— {node.frontmatter.date}</PostDate>
        </PostTitle>
        <p>{node.frontmatter.description}</p>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
