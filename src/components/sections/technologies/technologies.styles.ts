import styled from '@emotion/styled';
import { Flex, Text } from '@chakra-ui/react';
import { colors, breakpoints } from './../../../styles/theme';

export const ContentWrapper = styled(Flex)`
  flex-flow: column;
  margin: 0 1.5rem;
`;

export const TechList = styled(Flex)`
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.accent.purple};
  border-radius: 1.6rem;
  padding: 1.75rem;
  margin-bottom: 4rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 2.75rem;
  }
`;

export const Heading = styled(Text)`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 3rem;

  background: ${(props) => props.scheme};
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: ${breakpoints.xl}) {
    font-size: 1.75rem;
  }
`;

export const TechWrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 17.5rem;
    height: 6.25rem;
    margin: 1rem;

    @media (min-width: ${breakpoints.xl}) {
      width: 17rem;
      height: 6rem;
      margin: 1rem 2rem;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 95%;
  }
`;
