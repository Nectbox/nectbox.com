import { FluidObject } from 'gatsby-image';
import * as React from 'react';
import { Link } from '../../common';
import Img from 'gatsby-image';

// Maybe This needs to be a global interface
interface Post {
  node: {
    slug: string;
    title: string;
    id: string;
    description: string;
    blogImage: {
      fluid: FluidObject;
    };
  };
}

interface CardProps {
  data: Post;
}

const Card: React.FC<CardProps> = ({ data }) => {
  console.log(data);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
      <h1>{data.node.title}</h1>
      <p>{data.node.description}</p>
      <Link to={`/blog/${data.node.slug}`}>click me</Link>
    </div>
  );
};

export default Card;
