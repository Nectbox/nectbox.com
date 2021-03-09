import * as React from 'react';
import { Container, Flex, Text } from '@chakra-ui/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FormatterData } from '../../../types';
import { dimensions } from '../../../styles/theme';
import { Avatar, SplitSection } from '../../common';

export interface PostProps {
  metaData: FormatterData;
  postData: string;
  headerPostRef?: React.MutableRefObject<HTMLDivElement>;
  bodyPostRef?:
    | React.RefObject<HTMLDivElement>
    | ((node?: Element | null) => void);
}

const Post: React.FC<PostProps> = (props) => {
  const { metaData, postData, headerPostRef, bodyPostRef } = props;

  return (
    <Container maxW={dimensions.width}>
      <SplitSection
        ref={headerPostRef}
        paddingTop='9.5rem'
        title={metaData.title}
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
          <Flex
            flexGrow={1}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            justifyContent='space-between'
            direction={{ base: 'column', sm: 'row' }}>
            <Avatar name={metaData.author} title={metaData.date} />
          </Flex>
        }
        wide
      />
      <Container maxW={dimensions.postWidth} ref={bodyPostRef}>
        <MDXRenderer>{postData}</MDXRenderer>
      </Container>
    </Container>
  );
};

export default Post;
