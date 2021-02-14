import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { css } from '@emotion/react';
import { Flex, Text } from '@chakra-ui/react';
import { BackgroundOptions } from './section';

export const SectionWrapper = styled.section<BackgroundOptions>`
  padding: 7.5rem 0;

  ${(props) =>
    props.variant === 'background' &&
    css`
      padding: 3.75rem 0;
    `}
`;

export const Background = styled.div<BackgroundOptions>`
  background: transparent;

  ${(props) =>
    props.variant === 'background' &&
    css`
      padding: 7.5rem 0;
      background: ${props.bgColor};
      border-radius: 2.5rem;
    `}
`;

export const TopContent = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 0 auto 10rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 90%;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 80%;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 70%;
  }
`;

export const Caption = styled(Text)`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  color: ${theme.colors.text.lightGray};
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 1.7rem;
  }
`;

export const Heading = styled(Text)`
  font-family: ${theme.fonts.heading};
  font-size: 5.35rem;
  font-weight: 700;
  line-height: 6.65rem;
  margin-bottom: 6rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 5.7rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 6rem;
  }
`;

export const SubHeading = styled(Text)`
  width: 85%;
  align-self: center;
  font-size: 2rem;

  @media (min-width: ${theme.breakpoints.xs}) {
    font-size: 2.45rem;
  }
`;

export const BottomContent = styled(Flex)`
  justify-content: center;
  margin-top: 6.5rem;
`;

export const SectionContentWrapper = styled(Flex)`
  max-width: ${(props) => (props.wide ? '100%' : '118rem')};
  margin: 0 auto;
  justify-content: center;
`;
