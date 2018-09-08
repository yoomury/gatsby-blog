import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

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

export default ({ data: { allMarkdownRemark: { totalCount, edges } } }) => (
  <div>
    <Title>Bini's Awesome Learnings</Title>
    <h4>{totalCount} Learnings</h4>
    {edges.map(
      ({
        node: {
          id,
          frontmatter: { title, date, description },
          fields: { slug }
        }
      }) => (
        <div key={id}>
          <Link to={slug}>
            <PostTitle>
              {title} <PostDate>— {date}</PostDate>
            </PostTitle>
          </Link>
          <p>{description}</p>
        </div>
      )
    )}
  </div>
);

export const query = graphql`
  query LearningsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/learnings/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
