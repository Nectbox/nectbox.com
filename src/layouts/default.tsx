import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Global } from '@emotion/react';
import { CSSReset } from '@chakra-ui/react';
import globalStyles from '../styles/global';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global styles={globalStyles} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
