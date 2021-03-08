import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Box, Text } from '@chakra-ui/react';

export const CardWrapper = styled(Box)`
  width: 100%;
  min-width: 28rem;
  max-width: ${(props) => (props.maxW ? props.maxW : '42rem')};
  background: ${theme.colors.background.light};
  border-radius: 0.8rem;
  padding: 1.5rem 1.7rem;
  transition-property: transform, box-shadow;
  transition-duration: ${theme.transitions.speed.l};
  transition-timing-function: ${theme.transitions.curve.scaleUp};

  &:hover {
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-0.7rem);
  }
`;

export const Title = styled(Text)`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${theme.colors.text.darkGray};
  margin-top: 3.55rem;
  margin-bottom: 0.35rem;
`;

export const Description = styled(Text)`
  font-size: 1.85rem;
  color: ${theme.colors.text.gray};
  margin-bottom: 2.5rem;
`;

export const Date = styled(Text)`
  font-size: 1.45rem;
  color: ${theme.colors.text.lightGray};
  margin-bottom: 1rem;
`;
