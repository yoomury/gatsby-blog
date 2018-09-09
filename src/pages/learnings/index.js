import React, { Fragment } from 'react';
import { Post } from '../../components/Post';

export default ({ data: { allMarkdownRemark: { edges } } }) => (
    <Fragment>
        <h1>Latest Learnings</h1>
        {edges.map(({ node: { id, frontmatter: { title, description }, fields: { slug } } }) => <Post id={id} title={title} description={description} slug={slug} />)}
    </Fragment>
);

export const query = graphql`
    query LearningsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/learnings/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`;
