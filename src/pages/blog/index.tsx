import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

import { DefaultLayout, SEO } from '../../components';
import Posts from '../../components/blog';

interface Post{
  node : {

    title: string;
    slug: string;
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
                  title
                  slug
              }
          }
      }
  }
`)
console.log({datafromPage: data});
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Posts' />
      {data.allContentfulBlogPost.edges.map((edge:Post) => {
        return  <Posts data={edge} /> 
      })}
     
    </DefaultLayout>
  );
};

export default BlogPage;