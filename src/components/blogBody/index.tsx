import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import { Bold, Code, Heading1, Text } from "../../templates/Markdown"
import Img from "gatsby-image"
import { useContentfulImage } from '../../templates/hooks/useContenfulImage'

type BlogBodyProps = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>
}


const BlogBody = ({ content }: BlogBodyProps) => {
  console.log({ my: content });
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <Heading1>{children}</Heading1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      // [MARKS.CODE]: (node, children) => {
      //   console.log(node)
      //   return (
      //     <Code>{children}</Code>
      //   )
      // },
      //! not really sure how to render the code here it is under a <p> tag 
      [MARKS.CODE]: node => {
        console.log({node});
        return (
          <Text>{node}</Text>
        )
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImage(node.data.target.sys.id)
        if (asset) {
          return (
            <Img  fluid={asset.node.fluid}  style={{ maxWidth: "500px", margin: "5% auto" }}/>
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
