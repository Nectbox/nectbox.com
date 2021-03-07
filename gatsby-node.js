const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      posts: allMdx {
        edges {
          node {
            slug
          }
        }
      }
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = data.posts.edges;
  posts.forEach((post, idx) => {
    const previous = idx === posts.length - 1 ? null : posts[idx + 1].node;
    const next = idx === 0 ? null : posts[idx - 1].node;

    createPage({
      component: path.resolve('./src/templates/blog-post.tsx'),
      path: `/blog/${post.node.slug}`,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });

  const categories = data.categories.group;
  categories.forEach((category) => {
    createPage({
      component: path.resolve('./src/templates/blog-category.tsx'),
      path: `/blog/${category.fieldValue}`.toLowerCase(),
      context: {
        category: category.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
