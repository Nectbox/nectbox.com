import { Container, Divider, Img } from '@chakra-ui/react';
import * as React from 'react';
import { PageProps, graphql, useStaticQuery, Link } from 'gatsby';
import { DefaultLayout } from '../components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import Highlight, { defaultProps } from "prism-react-renderer";




export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      description
      id
      createdAt
      post {
        raw
      }
    }
  }
`;
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <h1 style={{ color: "red" }}>{children}</h1>


const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Text>{text}</Text>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    // [BLOCKS.PARAGRAPH]: node => {
    //   return (
    //     <>
    //       <Highlight {...defaultProps} code={node} language="jsx">
    //         {({ className, style, tokens, getLineProps, getTokenProps }) => (
    //           <pre className={className} style={style}>
    //             {tokens.map((line, i) => (
    //               <div {...getLineProps({ line, key: i })}>
    //                 {line.map((token, key) => (
    //                   <span {...getTokenProps({ token, key })} />
    //                 ))}
    //               </div>
    //             ))}
    //           </pre>
    //         )}
    //       </Highlight>
    //     </>
    //   )
    // }
  }
}

const BlogTemplate = ({ data }) => {
  const { title, description, createdAt, post } = data.contentfulBlogPost;
  // const {raw} = post


  return (
    <DefaultLayout>
      <h1>{title}</h1>
      <p>{description}</p>

      {renderRichText(post, options)}
    </DefaultLayout>
  )
};

export default BlogTemplate;


