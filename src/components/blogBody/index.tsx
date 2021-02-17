import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import { Bold, Heading1, Text } from "../../templates/Markdown"
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node, 989889);
        const asset = useContentfulImage(node.data.target.sys.id)
        console.log(asset, 552552552);
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
