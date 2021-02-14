import * as React from 'react';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/default';
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
