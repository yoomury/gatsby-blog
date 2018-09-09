const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        if (page.path === '/') {
            // It's assumed that `landingPage.js` exists in the `/layouts/` directory
            page.layout = 'empty';

            // Update the page.
            createPage(page);
        }

        resolve();
    });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {

            createPage({
                path: node.fields.slug,
                component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}Template.js`),
                context: {} // additional data can be passed via context
            });
        });
    });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value
        });
    }
};
