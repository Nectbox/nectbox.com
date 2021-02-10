import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import globalStyles from '../styles/global';

const Main = styled.main`
  margin-top: 8rem;
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global styles={globalStyles} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
