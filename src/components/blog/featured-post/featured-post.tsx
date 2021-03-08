import * as React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Flex, Badge, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Avatar, SplitSection, Link } from '../../common';
import { colors, dimensions } from '../../../styles/theme';
import { FormatterData } from '../../../types';

export const Description = styled(Text)`
  font-size: 2.1rem;
  line-height: 3.45rem;
  font-weight: 400;
  color: ${colors.text.gray};
  margin-bottom: 2rem;
`;

export interface FeaturedPostProps {
  data: FormatterData;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ data }) => {
  return (
    <SplitSection
      customWidth={dimensions.blogWidth}
      paddingTop='11.5rem'
      titleHTML={data.htmlTitle}
      headingProps={{
        fontSize: {
          base: '4.7rem !important',
          sm: '5.2rem !important',
          lg: '6.1rem !important',
        },
        lineHeight: {
          base: '5.45rem !important',
          sm: '6.15rem !important',
          lg: '7rem !important',
        },
      }}
      leftPane={
        <>
          <Flex mb='1rem'>
            <Badge
              variant='solid'
              mr='0.6rem'
              fontSize='1.25rem'
              colorScheme='purple'>
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
          <Description>{data.excerpt}</Description>
          <Text
            mb='4rem'
            color={colors.text.gray}
            fontSize='1.4rem'
            fontStyle='italic'>
            Published at {data.date}
          </Text>
          <Flex
            flexGrow={1}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            justifyContent='space-between'
            direction={{ base: 'column', sm: 'row' }}>
            <Avatar name={data.author} title='Developer' />
            <Flex alignSelf={{ base: 'center', sm: 'start' }}>
              <Link to={`/blog/${data.slug}`}>
                <Text
                  mt={{ base: '2.5rem', sm: 0 }}
                  p='1.2rem'
                  fontSize='2rem'
                  color={colors.text.gray}
                  _hover={{ color: colors.accent.purple }}>
                  Read more
                  <ArrowRightIcon ml='.9rem' w={5} h={5} />
                </Text>
              </Link>
            </Flex>
          </Flex>
        </>
      }
      rightPane={
        <Link to={data.slug} style={{ maxWidth: '90%' }}>
          <Image
            fluid={data.featuredImage.childImageSharp.fluid}
            imgStyle={{
              objectFit: 'contain',
            }}
            alt={data.title}
          />
        </Link>
      }
    />
  );
};

export default FeaturedPost;
