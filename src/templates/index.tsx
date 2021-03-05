import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { DefaultLayout } from '../components';


export default ({data}) => {
  console.log(data.mdx);
  const { frontmatter, body} =data.mdx
  console.log(data);
  return (
    <DefaultLayout>
      
      <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.date}</h1>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.author}</p>
      <MDXRenderer>{body}</MDXRenderer>

    </DefaultLayout>
  )
}


export const query = graphql`
  query PostBySlug($slug: String!){
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title,
        date,
        description
        author
      }
      body
    }
  }
`;

