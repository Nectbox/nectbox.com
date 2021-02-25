import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import { Bold, Code, Heading1, TestingCode, Text } from "../../templates/markdown"
import Img from "gatsby-image"
import { useContentfulImage } from '../../hooks/use-contenful-image'
import Highlight, { defaultProps } from 'prism-react-renderer'

type BlogBodyProps = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>
}
import dracula from 'prism-react-renderer/themes/dracula';


const BlogBody = ({ content }: BlogBodyProps) => {
  console.log({ my: content });
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.CODE]: (text) => {
        console.log(text, 99999);
        return (
          // <code style={{border: "1px solid red" }}>{text}</code>
          <Highlight   {...defaultProps} code={text} language="jsx" theme={dracula} >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div style={{display:"flex"}} key={i} {...getLineProps({ line, key: i })}>
                    <span style={{display: "table-cell", marginRight:"10px"}}>{i+1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )
      }
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImage(node.data.target.sys.id)
        if (asset) {
          return (
            <Img fluid={asset.node.fluid} style={{ maxWidth: "500px", margin: "5% auto" }} />
          )
        }
      },
    },
  }
  return (
    <article>{renderRichText(content, options)}</article>
  )
}

export default BlogBody
