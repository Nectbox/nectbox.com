import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { DefaultLayout, Post } from '../components';
import { MdxBlogPostData } from '../types';
import { useScrollPercentage } from 'react-scroll-percentage';

export default function BlogPost({ data }: PageProps<MdxBlogPostData>) {
  const { frontmatter, body, timeToRead } = data.mdx;

  const headerPostRef = React.useRef<HTMLDivElement | null>(null);
  const [bodyPostRef, percentage] = useScrollPercentage({
    threshold: 0.15,
  });

  return (
    <DefaultLayout
      post
      postNavProps={{ data: timeToRead, percentage }}
      headerProps={{ heroCtaRef: headerPostRef, postData: frontmatter }}>
      <Post
        metaData={frontmatter}
        postData={body}
        headerPostRef={headerPostRef}
        bodyPostRef={bodyPostRef}
      />
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
