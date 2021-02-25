import styled from '@emotion/styled';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';
import { breakpoints, colors } from './../../../styles/theme';

export const FooterContent = styled(Flex)`
  flex-flow: column;
  margin-top: 7rem;
  color: ${colors.text.light};

  @media (min-width: ${breakpoints.md}) {
    flex-flow: row;
  }
`;

export const CompanyDetails = styled(Flex)`
  width: 100%;
  flex-grow: 1;
  flex-flow: column;
  align-items: center;
  text-align: center;
  font-size: 1.7rem;
  padding-right: 1rem;
  margin-bottom: 5rem;

  @media (min-width: ${breakpoints.md}) {
    max-width: 38rem;
    margin-bottom: 0;
  }
`;

export const Description = styled(Text)`
  font-size: 1.9rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Contact = styled(Text)`
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
`;

export const NavigationWrapper = styled(Flex)`
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${breakpoints.xs}) {
    margin-left: 4.5rem;
  }
`;

export const NavigationList = styled(List)`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  padding: 0 2rem 1rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints.xs}) {
    display: block;
    text-align: initial;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavigationListTitle = styled(ListItem)`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${colors.text.light};
  margin-bottom: 1rem;
`;

export const NavigationListItem = styled(ListItem)`
  font-size: 1.5rem;
  padding: 0.75rem 0;

  > a {
    padding: 0.75rem 0;
  }

  > a:hover {
    color: ${colors.text.light};
  }
`;

export const SocialMediaWrapper = styled(Flex)`
  a {
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  img {
    filter: invert(1);
    width: 2.5rem;
  }
`;

export const Copyright = styled(Text)`
  font-size: 1.5rem;
  text-align: center;
  transform: translateY(4rem);

  @media (min-width: ${breakpoints.lg}) {
    text-align: right;
  }
`;
