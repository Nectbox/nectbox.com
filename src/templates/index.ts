import { Container, Divider } from '@chakra-ui/react';
import * as React from 'react';
import { PageProps, graphql, useStaticQuery, Link } from 'gatsby';
import { DefaultLayout } from '../components';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

// const options = {
//   renderNode: {
//     [INLINES.ENTRY_HYPERLINK]: ({
//       data: {
//         target: { slug, title },
//       },
//     }) => <Link to={slug}>{title}</Link>,
//     [BLOCKS.EMBEDDED_ASSET]: node => <p {...node.data.target} />
//   }
// }

const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      description
      post{
        raw
      }
    }
  }
`;

const BlogTemplate = ({data}) => {
 const {title} = data.contentfulBlogPost
  console.log({title});
 
};

export default BlogTemplate;
