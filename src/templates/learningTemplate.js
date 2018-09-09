import React from 'react';

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter: {date, title, image}, html } = markdownRemark;
    return (
        <div>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
            <img src={image} />
        </div>
    );
}

export const pageQuery = graphql`
    query LearningPostBySlug($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                image
            }
            html
        }
    }
`;
