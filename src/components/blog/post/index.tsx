import React from 'react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import { Bold, Heading1, Text } from '../../../templates/markdown';
import Img from 'gatsby-image';
import { useContentfulImage } from '../../../hooks/use-contenful-image';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

type PostProps = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
};

const Post = ({ content }: PostProps) => {
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (children) => <Bold>{children}</Bold>,
      [MARKS.CODE]: (children) => {
        return (
          <Highlight
            {...defaultProps}
            code={children as string}
            language='jsx'
            theme={dracula}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => {
              return (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => {
                    return (
                      <div key={i} {...getLineProps({ line, key: i })}>
                        <span
                          style={{
                            display: 'inline-block',
                            marginRight: '10px',
                          }}>
                          {i + 1}
                        </span>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    );
                  })}
                </pre>
              );
            }}
          </Highlight>
        );
      },
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImage(node.data.target.sys.id);
        if (asset) {
          return (
            <Img
              fluid={asset.node.fluid}
              style={{ maxWidth: '500px', margin: '5% auto' }}
            />
          );
        }
      },
    },
  };
  return <article>{renderRichText(content, options)}</article>;
};

export default Post;
