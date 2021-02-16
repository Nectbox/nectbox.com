import { Link } from 'gatsby';
import * as React from 'react';


interface Post{
    slug: string;
    title: string;
}
type PostProps ={
  posts: [Post]
}

interface Props {
  data: Post
}
const Posts: React.FC<Props> = ({data}) => {
  console.log({data});
  return (
    <div>
      {/* <h1>{data.node.title}</h1> */}
      <Link to={`/blog/${data.node.slug}`}>{data.node.title}</Link>
    </div>
  )
}

export default Posts
