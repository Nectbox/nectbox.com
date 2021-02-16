import { Link } from 'gatsby';
import * as React from 'react';


interface Post{
  node: {
    slug: string;
    title: string;
  }
  
}


interface Props {
  data: Post
}
const Posts: React.FC<Props> = ({data}) => {
  console.log({data});
  return (
    <div>
      <Link to={`/blog/${data.node.slug}`}>{data.node.title}</Link>
    </div>
  )
}

export default Posts
