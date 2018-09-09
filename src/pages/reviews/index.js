import React, { Fragment } from 'react';
import { Post } from '../../components/Post';

export default ({ data: { allMarkdownRemark: { edges } } }) => (
    <Fragment>
        <h1>Latest Reviews</h1>
        {edges.map(({ node: { id, frontmatter: { title, date, description }, fields: { slug } } }) => <Post id={id} title={title} description={description} slug={slug} />)}
    </Fragment>
);

export const query = graphql`
    query ReviewsQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "review" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
