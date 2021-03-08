import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Stack, Text, Flex } from '@chakra-ui/react';

export const TileSectionWrapper = styled(Stack)`
  padding: 7.5rem 0;
`;

export const Title = styled(Text)`
  width: fit-content;
  font-family: ${theme.fonts.heading};
  font-size: 3.95rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${theme.colors.accent.red};

  :hover {
    text-decoration: underline;
  }
`;

export const PostWrapper = styled(Flex)`
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
