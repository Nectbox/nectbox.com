import * as React from 'react';
import { DefaultLayout, SEO } from '../components';
import { PageProps } from 'gatsby';

const OurWorkPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Our Work' />
      hello
    </DefaultLayout>
  );
};

export default OurWorkPage;
