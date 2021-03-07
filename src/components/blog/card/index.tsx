import * as React from 'react';
import Image from 'gatsby-image';
import { Badge, Box } from '@chakra-ui/react';
import { Link } from '../../common';
import { FormatterData } from '../../../types';

interface CardProps {
  data: FormatterData;
}

// TODO: Make a more custom card
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Box maxW='38rem' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image
        fluid={data.featuredImage.childImageSharp.fluid}
        alt={data.title}
      />

      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          {data.keywords.map((keyword) => (
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'>
              {keyword}
            </Box>
          ))}
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated>
          {data.title}
        </Box>

        <Box>{data.excerpt}</Box>
      </Box>
    </Box>
  );
};

export default Card;
