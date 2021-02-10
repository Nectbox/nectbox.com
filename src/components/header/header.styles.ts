import { Stack, Container } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HeaderSection = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;

  img {
    transform: translateY(-0.23rem);
  }
`;

export const Wrapper = styled(Container)`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  font-size: 1.8rem;

  p > a,
  > a {
    padding: 2rem 1.5rem;
    margin: 0 0.3rem;

    :hover {
      color: #44337a;
    }
  }
`;
