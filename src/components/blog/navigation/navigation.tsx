import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from '../../common';
import { useTransform, useElementScroll } from 'framer-motion';
import { Container, Flex, Progress, Stack, Text } from '@chakra-ui/react';
import { colors, width } from '../../../styles/theme';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export const NavigationWrapper = styled(Stack)`
  background: ${colors.background.lightGray};
  min-height: 4.8rem;
  margin-top: 0 !important;
`;

export const LabelText = styled(Text)`
  font-weight: 400;
  color: ${colors.text.lightGray};
  padding: 1rem 2rem;

  :hover {
    color: ${colors.text.gray};
  }
`;

export interface NavigationProps {
  data?: number;
  percentage?: number;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { data, percentage } = props;

  return (
    <NavigationWrapper>
      <Container maxW={width} height='inherit'>
        <Flex
          height='inherit'
          alignItems='center'
          justifyContent='space-between'>
          <LabelText>
            <Link to='/blog'>Back to Blog</Link>
          </LabelText>
          <LabelText>
            <InfoOutlineIcon mr='0.3rem' /> {data} min read
          </LabelText>
        </Flex>
      </Container>
      <Progress
        value={Math.floor(percentage * 100)}
        size='xs'
        colorScheme='purple'
      />
    </NavigationWrapper>
  );
};

export default Navigation;
