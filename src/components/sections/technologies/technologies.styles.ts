import styled from '@emotion/styled';
import { Flex, Text } from '@chakra-ui/react';
import { colors, fonts } from './../../../styles/theme';

export const ContentWrapper = styled(Flex)`
  width: 100%;
  flex-flow: column;
  margin: 0 1.5rem;
`;

export const TechList = styled(Flex)`
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.accent.purple};
  border-radius: 1.6rem;
  padding: 2.5rem;
  margin-bottom: 2.25rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Heading = styled(Text)`
  font-size: 1.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 3rem;

  background: ${(props) => props.scheme};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TechWrapper = styled(Flex)`
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 14rem;
    height: 4.5rem;
    margin: 0 1.5rem;
  }
`;
