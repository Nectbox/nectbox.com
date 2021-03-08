import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import {
  DefaultLayout,
  FeaturedPost,
  SEO,
  TileSection,
} from '../../components';
import { FormatterData, MdxBlogPostsData } from '../../types';

export interface BlogQueryData {
  posts: MdxBlogPostsData;
  categories: {
    group: Array<{ fieldValue: string }>;
  };
}

const BlogPage = ({ location }: PageProps) => {
  const { posts, categories }: BlogQueryData = useStaticQuery(graphql`
    query {
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      posts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              author
              description
              excerpt
              slug
              title
              htmlTitle
              date(formatString: "MMMM DD, YYYY")
              id
              category
              keywords
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const allPosts = posts.edges;
  const featuredBlogPost = allPosts[0].node.frontmatter;

  return (
    <DefaultLayout blog>
      <SEO pathname={location.pathname} title='Blog' />
      <FeaturedPost data={featuredBlogPost} />
      {categories.group.map((category, idx) => {
        const categoryPostData = allPosts.filter(
          (post) => post.node.frontmatter.category === category.fieldValue
        );

        return (
          <TileSection
            key={idx}
            title={category.fieldValue}
            data={categoryPostData}
          />
        );
      })}
    </DefaultLayout>
  );
};

export default BlogPage;
