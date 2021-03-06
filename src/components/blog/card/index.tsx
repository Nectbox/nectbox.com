import * as React from 'react';
import { Post } from '../../../pages/blog';
import { Link } from '../../common';


interface CardProps {
  data: Post
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
      <h1>{data.node.frontmatter.title}</h1>
      <p>{data.node.frontmatter.description}</p>
      <Link to={`/blog/${data.node.frontmatter.slug}`}>click me</Link>
    </div>
  );
};

export default Card;
