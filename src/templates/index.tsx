import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
// import { FluidObject } from 'gatsby-image';
// import {
//   ContentfulRichTextGatsbyReference,
//   RenderRichTextData
// } from 'gatsby-source-contentful/rich-text';
// import * as React from 'react';
// import { DefaultLayout, Post } from '../components';
// type TemplateProps = {
//   data: {
//     blog: {
//       id: string;
//       title: string;
//       slug: string;
//       date: string;
//       post: RenderRichTextData<ContentfulRichTextGatsbyReference>;
//       blogImage: {
//         fluid: FluidObject;
//       }[];
//     };
//   };
// };
// const BlogTemplate = ({ data: { blog } }: TemplateProps) => {
//   return (
//     <DefaultLayout>
//       <Post content={blog.post} />
//     </DefaultLayout>
//   );
// };
// export default BlogTemplate;
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
      <MDXRenderer>{body}</MDXRenderer>

    </DefaultLayout>
  )
}


export const query = graphql`
  query PostBySlug($slug: String!){
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
      }
      body
    }
  }
`;

