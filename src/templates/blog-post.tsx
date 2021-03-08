import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { DefaultLayout, Post } from '../components';
import { MdxBlogPostData } from '../types';

export default function BlogPost({ data }: PageProps<MdxBlogPostData>) {
  const { frontmatter, body, timeToRead } = data.mdx;

  return (
    <DefaultLayout post postProps={{ data: timeToRead }}>
      <Post metaData={frontmatter} postData={body} />
    </DefaultLayout>
  );
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      timeToRead
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
