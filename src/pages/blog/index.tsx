import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { Card, DefaultLayout, SEO } from '../../components';
export interface Post{
    node: {
      frontmatter:{
        title: string,
        description: string
        date: string,
        slug: string,
        excerpt: string;
        blogImage?: {
          fluid: FluidObject
        }
      }
    }
  
}

const BlogPage = ({ location }: PageProps) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              title
              description
              excerpt
              slug
              date
            }
          
          }
        }
      }
    }
  `);

  // console.log(data);
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Posts' />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {data.allMdx.edges.map((edge: Post) => {
          return <Card key={edge.node.frontmatter.title} data={edge} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;
