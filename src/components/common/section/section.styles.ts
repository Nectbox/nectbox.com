import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { css } from '@emotion/react';
import { Flex, Text } from '@chakra-ui/react';
import { BackgroundOptions, ColorOptions } from './section';

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

export const TopContent = styled.header<ColorOptions>`
  width: 95%;
  display: flex;
  flex-flow: column;
  text-align: center;
  margin: 0 auto;
  color: ${(props) => props.txtColor};

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
  font-size: 5.15rem;
  font-weight: 700;
  line-height: 6rem;
  margin-bottom: 6rem;

  ${(props) =>
    props.gradiant &&
    css`
      background: ${props.color};
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 5.7rem;
    line-height: 6.6rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 6rem;
  }
`;

export const SubHeading = styled(Text)`
  width: 85%;
  align-self: center;
  font-size: 2rem;
  color: inherit;
  margin-bottom: ${(props) => (props.top ? 0 : '10rem')};

  @media (min-width: ${theme.breakpoints.xs}) {
    font-size: 2.45rem;
  }
`;

export const CustomTop = styled(Flex)`
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 8rem;
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
