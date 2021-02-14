import * as React from 'react';
import Image, { FixedObject } from 'gatsby-image';
import { BoxWrapper, Heading, Content } from './box.styles';

interface BoxProps {
  title: string;
  content: string;
  src: FixedObject | FixedObject[];
  withNumber?: boolean;
  number?: number;
}

const Box = (props: BoxProps) => {
  const { src, title, content, number, withNumber, ...restProps } = props;

  return (
    <BoxWrapper content={number} showContent={withNumber} {...restProps}>
      <Image fixed={src} alt={title} />
      <Heading as='h3'>{title}</Heading>
      <Content>{content}</Content>
    </BoxWrapper>
  );
};

Box.defaultProps = {
  withNumber: false,
};

export default Box;
