import * as React from 'react';
import Image from 'gatsby-image';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { Card, DefaultLayout, Link, SEO, SplitSection } from '../../components';
import { AllMdxBlogPostData, FormatterData } from '../../types';
import { dimensions } from '../../styles/theme';
export interface Post {
  node: {
    frontmatter: FormatterData;
  };
}

const BlogPage = ({ location }: PageProps) => {
  const data: AllMdxBlogPostData = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

  const allPosts = data.allMdx.edges;
  const featuredBlogPost = allPosts[allPosts.length - 1].node.frontmatter;

  return (
    <DefaultLayout blog>
      <SEO pathname={location.pathname} title='Blog' />
      <SplitSection
        customWidth={dimensions.blogWidth}
        paddingTop='12.5rem'
        titleHTML={featuredBlogPost.htmlTitle}
        subTitle={featuredBlogPost.excerpt}
        headingProps={{
          fontSize: {
            base: '4.9rem !important',
            sm: '5.3rem !important',
            lg: '5.9rem !important',
          },
          lineHeight: {
            base: '6rem !important',
            sm: '6.75rem !important',
            lg: '7.45rem !important',
          },
        }}
        rightPane={
          <Link to={featuredBlogPost.slug} style={{ maxWidth: '85%' }}>
            <Image
              fluid={featuredBlogPost.featuredImage.childImageSharp.fluid}
              imgStyle={{
                objectFit: 'contain',
              }}
              alt='Launching a new product'
            />
          </Link>
        }
      />
    </DefaultLayout>
  );
};

export default BlogPage;
