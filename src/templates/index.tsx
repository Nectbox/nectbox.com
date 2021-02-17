import { Container, Divider, Img } from '@chakra-ui/react';
import * as React from 'react';
import { PageProps, graphql, useStaticQuery, Link } from 'gatsby';
import { DefaultLayout } from '../components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import Highlight, { defaultProps } from "prism-react-renderer";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
import { FluidObject } from 'gatsby-image';
import BlogBody from '../components/blogBody';


type TemplateProps = {
  data: {
    blog: {
      id: string
      title: string
      slug: string
      date: string
      post: RenderRichTextData<ContentfulRichTextGatsbyReference>
      blogImage: {
        fluid: FluidObject
      }[]
    }
  }
}

const BlogTemplate = ({ data: {blog} } : TemplateProps) => {
  console.log(blog);
  return (
    <DefaultLayout>
      <BlogBody content={blog.post}/>
    </DefaultLayout>
  )
};

export default BlogTemplate;



export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      description
      id
      createdAt(formatString: "MMM D YYYY")
      blogImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      post {
        raw
      }
    }
  }
`;