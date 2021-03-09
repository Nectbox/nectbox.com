import styled from '@emotion/styled';
import { Stack } from '@chakra-ui/layout';
import { colors, breakpoints } from './../../../styles/theme';
import { Flex } from '@chakra-ui/react';

export const CategoryFilterWrapper = styled(Stack)`
  background: ${colors.background.lightGray};
  min-height: 4.8rem;
  margin-top: 0 !important;
`;

export const FilterLabel = styled.p`
  font-weight: 400;
  color: ${colors.text.lightGray};
  padding: 1rem 2rem;
  cursor: pointer;

  :hover {
    color: ${colors.text.gray};
  }
`;

export const ConetntWrapper = styled(Flex)`
  height: inherit;
  flex-flow: column;

  justify-content: space-evenly;

  @media (min-width: ${breakpoints.md}) {
    flex-flow: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
