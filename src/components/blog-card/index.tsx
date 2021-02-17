
import { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Link } from '../common';
import Img from "gatsby-image"



// Maybe This needs to be a global interface
interface Post {
  node: {
    slug: string;
    title: string;
    id: string,
    description: string
    blogImage: {
      fluid: FluidObject
      
    }
  }

}


interface Props {
  data: Post
}
const BlogCard: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div style={{display:"flex", flexDirection:"column" ,padding:"1rem"}}>
      <h1>{data.node.title}</h1>
      <p>{data.node.description}</p>
      {/* <Img fluid={data.node.blogImage.fluid}  style={{ maxWidth: "500px", margin: "5% auto" }}/> */}
      <Link style={{padding:"1rem", border: "2px solid black", width:"fit-content",  background:"#2005"}} to={`/blog/${data.node.slug}`}>click me</Link>
    </div>
  )
}

export default BlogCard
