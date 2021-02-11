import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { Stack, Text } from '@chakra-ui/react';

export const HeroSection = styled(Stack)`
  padding: 5.5rem 0;

  button {
    font-size: 1.8rem;
  }

  .image-container {
    padding-left: 1rem;

    & > * {
      flex-grow: 1;
    }
  }
`;

export const Caption = styled(Text)`
  font-family: ${theme.fonts.heading};
  font-size: 1.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: ${theme.colors.background.gray};
  width: fit-content;
  padding: 0.3rem 0.75rem;
  border-radius: 0.8rem;
  margin-bottom: 2rem;
`;

export const HeroHeading = styled.h1`
  font-size: 7.9rem;
  line-height: 6.5rem;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  margin-bottom: 4rem;

  mark {
    font-size: inherit;
    background: ${theme.gradients.purple};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubHeading = styled(Text)`
  font-size: 2.35rem;
  font-weight: 500;
  margin-left: 10.5rem;
  margin-bottom: 4.5rem;
`;
