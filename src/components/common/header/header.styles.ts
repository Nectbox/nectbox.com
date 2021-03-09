import styled from '@emotion/styled';
import { colors, breakpoints } from '../../../styles/theme';
import {
  Stack,
  Container,
  DrawerCloseButton,
  IconButton,
  DrawerBody,
  Text,
  AccordionButton as ChakraAccordionButton,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react';

export const HeaderSection = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${colors.background.light};
  z-index: 10;
`;

export const MainHeader = styled(Stack)`
  height: 8rem;
  width: 100%;

  & div div > a {
    display: flex;
    align-items: center;
  }

  img {
    transform: translateY(-0.2rem);
  }

  .consultation {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    .consultation {
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

export const BurgerMenu = styled(IconButton)`
  display: block;
  margin-right: 0;
  box-shadow: none !important;

  @media (min-width: ${breakpoints.sm}) {
    margin-right: ${(props) => (props.spacing ? '2.6rem' : 0)};
  }

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
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

export const CloseButton = styled(DrawerCloseButton)`
  box-shadow: none !important;
  right: 1.6rem;
  top: 2.4rem;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    background: none;
  }
`;

export const Body = styled(DrawerBody)`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const AccordtionTitle = styled(Text)`
  flex: 1;
  text-align: left;
  font-size: 2.9rem;

  @media (min-width: ${breakpoints.xs}) {
    font-size: 3.45rem;
  }
`;

export const Panel = styled(AccordionPanel)`
  display: flex;
  flex-flow: column;
  padding-left: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: ${breakpoints.xs}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const PanelItem = styled(Flex)`
  font-size: 2.2rem;
  padding: 0.35rem 1rem;

  @media (min-width: ${breakpoints.xs}) {
    font-size: 2.7rem;
  }

  &:hover {
    color: ${colors.accent.purple};
  }
`;

export const AccordionButton = styled(ChakraAccordionButton)`
  box-shadow: none !important;
`;

export const Title = styled(AccordtionTitle)`
  position: absolute;
  top: 0;
  left: 4.25rem;
  padding: 0.5rem 2.5rem;
  transform: translate3d(0, -0.1rem, 0);
  z-index: 1000;

  @media (min-width: ${breakpoints.xs}) {
    left: 6rem;
  }

  &:hover {
    color: ${colors.accent.purple};
  }
`;

export const PostDetails = styled.p`
  width: 100%;
  display: none;
  align-items: center;
  font-size: 2.5rem;
  margin-left: 10rem;
  color: ${colors.text.darkGray};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;

  @media (min-width: ${breakpoints.md}) {
    font-size: 2.3rem;
    margin-left: 4rem;
    max-width: 35rem;
    display: block;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 2.4rem;
    margin-left: 7rem;
    max-width: 50rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin-left: 10rem;
    max-width: 53rem;
  }
`;
