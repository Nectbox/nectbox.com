import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

import { DefaultLayout, SEO } from '../../components';
import BlogCard from '../../components/blog-card';
import { FluidObject } from 'gatsby-image';

interface Post {
  node: {
    slug: string;
    title: string;
    id: string,
    description: string
    blogImage: {
      fluid: FluidObject
    }
  }
}

// const BlogPage = ({ location, data }: PageProps<Post>) => {
//   // console.log(data.node.title);
const BlogPage = ({ location }: PageProps) => {
  const data = useStaticQuery(graphql`
  query{
      allContentfulBlogPost(
          sort:{
              fields: publishedDate,
              order: DESC
          }
      ){
          edges{
              node{
                  id
                  description
                  title
                  slug
                  blogImage{
                    fluid{
                      src
                    }
                  }
                  
              }
          }
      }
  }
`)
  console.log({ datafromPage: data });
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Posts' />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {data.allContentfulBlogPost.edges.map((edge: Post) => {
          return <BlogCard data={edge} />
        })}
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;