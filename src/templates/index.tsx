import * as React from 'react';
import { PageProps, graphql, useStaticQuery, Link } from 'gatsby';
import { DefaultLayout, Post } from '../components';
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { FluidObject } from 'gatsby-image';

type TemplateProps = {
  data: {
    blog: {
      id: string;
      title: string;
      slug: string;
      date: string;
      post: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      blogImage: {
        fluid: FluidObject;
      }[];
    };
  };
};

const BlogTemplate = ({ data: { blog } }: TemplateProps) => {
  return (
    <DefaultLayout>
      <Post content={blog.post} />
    </DefaultLayout>
  );
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
