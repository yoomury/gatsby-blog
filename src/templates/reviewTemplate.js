import React from "react";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <h1>Review - {frontmatter.title}</h1>
      <h3>{frontmatter.date}</h3>
    </div>
  );
}

export const pageQuery = graphql`
  query ReviewPostBySlug($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
