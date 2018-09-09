import React from 'react';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter: { title, image }, html } = markdownRemark;
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export const pageQuery = graphql`
    query LearningPostBySlug($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            frontmatter {
                title
                image
            }
            html
        }
    }
`;
