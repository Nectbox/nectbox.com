import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { DefaultLayout } from '../components';
import { MdxBlogPostData } from '../types';

export default function BlogPost({ data }: PageProps<MdxBlogPostData>) {
  const { frontmatter, body } = data.mdx;

  return (
    <DefaultLayout>
      <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.date}</h1>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.author}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        author
        description
        excerpt
        slug
        title
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
      body
    }
  }
`;
