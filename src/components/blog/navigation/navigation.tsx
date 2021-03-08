import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from '../../common';
import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import { colors, width } from '../../../styles/theme';
import { InfoOutlineIcon } from '@chakra-ui/icons';

export const NavigationWrapper = styled(Stack)`
  background: ${colors.background.lightGray};
  height: 4.8rem;
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

const Navigation: React.FC<{ data?: number }> = ({ data }) => {
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
    </NavigationWrapper>
  );
};

export default Navigation;
