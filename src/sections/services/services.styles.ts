import styled from '@emotion/styled';
import theme, { transitions } from '../../styles/theme';
import { Flex, Text } from '@chakra-ui/react';

export const CardWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ServiceCard = styled(Flex)`
  flex-flow: column;
  height: fit-content;
  max-width: 35rem;
  width: 100%;
  border: 0.1rem solid ${theme.colors.background.gray};
  border-radius: 2rem;
  border-top-right-radius: 5rem;
  background: ${theme.colors.background.lightGray};
  padding: 2rem;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 3.25rem;
  transition-property: transform, box-shadow;
  transition-duration: ${transitions.speed.l};
  transition-timing-function: ${transitions.curve.scaleUp};

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    border-color: transparent;
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-0.7rem);
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const Heading = styled(Text)`
  font-size: 2.3rem;
  font-weight: 600;
  color: ${theme.colors.text.gray};
  margin-bottom: 2rem;
`;

export const Description = styled(Text)`
  width: 95%;
  font-size: 1.7rem;
  line-height: 2.5rem;
  margin-bottom: 3.5rem;
`;

export const Action = styled(Text)`
  & > svg {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`;
