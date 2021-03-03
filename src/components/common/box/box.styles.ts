import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Flex, Text } from '@chakra-ui/react';

export const BoxWrapper = styled(Flex)`
  position: relative;
  flex-flow: column;
  padding: 2rem;
  color: ${theme.colors.background.lightGray};

  &::before {
    display: ${(props) => (props.show ? 'block' : 'none')};
    content: '${(props) => props.content}';
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 800;
    color: inherit;
    font-size: 37rem;
    line-height: 30rem;
    transform: translateX(5rem);
    z-index: -1;
  }
`;

export const Heading = styled(Text)`
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  font-size: 2.85rem;
  color: ${theme.colors.text.darkGray};
  margin-top: 2.7rem;
  margin-bottom: 2rem;
`;

export const Content = styled(Text)`
  font-size: 1.9rem;
  color: ${theme.colors.text.gray};
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: keep-all;
`;
