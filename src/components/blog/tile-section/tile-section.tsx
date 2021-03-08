import * as React from 'react';
import { Link } from '../../common';
import { Card } from '..';
import { Container } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { TileSectionWrapper, Title, PostWrapper } from './tile-section.styles';
import { processCategoryTitle } from '../../../lib/utils';
import { FormatterData } from '../../../types';
import { dimensions } from '../../../styles/theme';

export interface TileSectionProps {
  data: Array<{
    node: {
      id: string;
      frontmatter: FormatterData;
      fields: {
        slug: string;
      };
    };
  }>;
  title: string;
}

const TileSection: React.FC<TileSectionProps> = (props) => {
  const { title, data } = props;

  return (
    <TileSectionWrapper>
      <Container maxW={dimensions.blogWidth}>
        <Title as='h3'>
          <Link to={`/blog/${title}`}>
            {processCategoryTitle(title)} <ArrowForwardIcon w={12} h={12} />
          </Link>
        </Title>
        <PostWrapper>
          {data.map((post) => (
            <Card
              key={post.node.frontmatter.id}
              data={post.node.frontmatter}
              maxW='38rem'
            />
          ))}
        </PostWrapper>
      </Container>
    </TileSectionWrapper>
  );
};

export default TileSection;
