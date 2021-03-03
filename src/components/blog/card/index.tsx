import * as React from 'react';
import { Post } from '../../../pages/blog';
import { Link } from '../../common';

// Maybe This needs to be a global interface
// interface Post {
//   node: {
//     slug: string;
//     title: string;
//     id: string;
//     description: string;
//     blogImage: {
//       fluid: FluidObject;
//     };
//   };
// }

interface CardProps {
  data:{
    node:{
      frontmatter: Post
    }
  }
}

const Card: React.FC<CardProps> = ({ data }) => {
  // console.log(data.node.frontmattertitle);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
      <h1>{data.node.frontmatter.title}</h1>
      <p>{data.node.frontmatter.description}</p>
      <Link to={`/blog/${data.node.frontmatter.slug}`}>click me</Link>
    </div>
  );
};

export default Card;
