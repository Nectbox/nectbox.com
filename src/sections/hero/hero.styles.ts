import { width } from './../../styles/theme';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Flex, Stack, Text } from '@chakra-ui/react';

export const HeroSection = styled(Stack)`
  padding: 7.5rem 0;
`;

export const Content = styled(Flex)`
  flex-flow: column;

  & > .content {
    flex-flow: column;
    margin-bottom: 5rem;

    .button-wrapper {
      flex-flow: column;

      > button {
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }

      > button:first-of-type {
        margin-right: 3rem;
      }
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      margin-bottom: 0;
      padding-right: 1rem;
      /* width: 48%; */
      flex: 48%;
    }

    @media (min-width: ${theme.breakpoints.xs}) {
      .button-wrapper {
        flex-flow: row;

        button {
          margin-bottom: 0;
        }
      }
    }
  }

  & > .image {
    @media (min-width: ${theme.breakpoints.lg}) {
      padding-left: 1rem;
      /* width: 52%; */
      flex: 52%;
    }

    & > * {
      flex-grow: 1;
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-flow: row;
  }
`;

export const Caption = styled(Text)`
  font-family: ${theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: ${theme.colors.background.gray};
  color: ${theme.colors.text.gray};
  width: fit-content;
  padding: 0.3rem 0.75rem;
  border-radius: 0.8rem;
  margin-bottom: 3.5rem;

  @media (min-width: ${theme.breakpoints.xs}) {
    font-size: 1.6rem;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 7.2rem;
  line-height: 6.8rem;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  margin-bottom: 4rem;

  mark {
    font-size: inherit;
    background: ${theme.gradients.purple};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 7.8rem;
  }
`;

export const SubHeading = styled(Text)`
  width: 100%;
  font-size: 2.2rem;
  line-height: 3.45rem;
  font-weight: 400;
  color: ${theme.colors.text.gray};
  margin-bottom: 4.5rem;

  @media (min-wdith: ${theme.breakpoints.lg}) {
    width: 93%;
  }
`;
