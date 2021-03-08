import * as React from 'react';
import Image from 'gatsby-image';
import { Badge, Flex, LayoutProps, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Avatar, Link } from '../../common';
import { CardWrapper, Title, Description, Date } from './card.styles';
import { FormatterData } from '../../../types';
import { colors } from '../../../styles/theme';

interface CardProps extends LayoutProps {
  data: FormatterData;
}

const Card: React.FC<CardProps> = (props) => {
  const { data, ...restProps } = props;

  return (
    <CardWrapper {...restProps}>
      <Link to={`/blog/${data.slug}`}>
        <Image
          fluid={data.featuredImage.childImageSharp.fluid}
          alt={data.title}
          imgStyle={{ borderRadius: '0.8rem' }}
        />

        <Title>{data.title}</Title>
        <Flex mb='2rem'>
          <Badge
            colorScheme='purple'
            variant='solid'
            mr='0.6rem'
            fontSize='1.25rem'>
            {data.category}
          </Badge>
          {data.keywords.map((keyword, idx) => (
            <Badge
              key={`keyword-${keyword}_${idx}`}
              mr='0.6rem'
              fontSize='1.25rem'>
              {keyword}
            </Badge>
          ))}
        </Flex>
        <Date>{data.date}</Date>
        <Description>{data.excerpt}</Description>
        <Text color={colors.accent.purple} fontSize='1.8rem' mb='2rem'>
          Read article <ArrowRightIcon ml='.9rem' w={5} h={5} />
        </Text>
      </Link>
    </CardWrapper>
  );
};

export default Card;

{
  /* <Box maxW='38rem' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
</Box> */
}
