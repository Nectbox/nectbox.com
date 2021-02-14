import styled from '@emotion/styled';
import { colors, breakpoints } from '../../../styles/theme';
import { Stack, Container } from '@chakra-ui/react';

export const HeaderSection = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  background: ${colors.background.light};
  z-index: 1000;

  & div div > a {
    display: flex;
    align-items: center;
  }

  img {
    transform: translateY(-0.2rem);
  }

  button {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    button {
      display: flex;
    }
  }
`;

export const Wrapper = styled(Container)`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
`;

export const Navigation = styled.nav`
  display: none;
  align-items: center;
  margin-left: 6rem;

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  font-size: 1.8rem;

  p > a,
  > a {
    font-weight: 500;
    padding: 2.5rem 1.5rem;
    margin: 0 0.3rem;
    color: ${colors.text.gray};

    :hover {
      color: ${colors.accent.purple};
    }
  }
`;
