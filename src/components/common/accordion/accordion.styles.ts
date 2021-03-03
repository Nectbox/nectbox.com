import { colors } from './../../../styles/theme';
import styled from '@emotion/styled';
import {
  AccordionButton as CAB,
  AccordionIcon,
  AccordionItem as CAI,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

export const AccordionItem = styled(CAI)`
  margin-bottom: 1rem;
  font-size: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Question = styled(Box)`
  flex: 1;
  text-align: left;
  font-size: 2.2rem;
  color: ${colors.text.darkGray};
`;

export const Answer = styled(AccordionPanel)`
  font-size: 2.1rem;
  line-height: 3.45rem;
  color: ${colors.text.gray};
  padding: 2rem 2rem 4rem 4rem;
`;

export const AccordionButton = styled(CAB)`
  padding: 2rem;

  :hover {
    background: initial;
    cursor: help;
  }

  :focus {
    box-shadow: none;
  }
`;
