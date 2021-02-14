import styled from '@emotion/styled';
import { Flex, Text } from '@chakra-ui/react';
import { colors } from './../../styles/theme';

export const CtaWrapper = styled(Flex)`
  flex-flow: column;
  align-items: center;
  text-align: center;
`;

export const Content = styled(Text)`
  font-size: 2.1rem;
  color: ${colors.text.gray};
  margin-bottom: 2.25rem;
`;
