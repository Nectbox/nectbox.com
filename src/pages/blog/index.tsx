import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

import { DefaultLayout, SEO, Card } from '../../components';
import { FluidObject } from 'gatsby-image';

interface Post {
  node: {
    slug: string;
    title: string;
    id: string;
    description: string;
    blogImage: {
      fluid: FluidObject;
    };
  };
}

//! could add this to renderMark object and you would be able to customise all the code tags
//! [MARKS.CODE]: (text) => <code className="custom-class">{text}</code>
//!  to modify what's inside paragraphs only; then handle it in your css `p code { some styling}`

const BlogPage = ({ location }: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            description
            title
            slug
            blogImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Posts' />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {data.allContentfulBlogPost.edges.map((edge: Post) => {
          return <Card data={edge} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;
