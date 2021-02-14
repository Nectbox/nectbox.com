import * as React from 'react';
import { DefaultLayout, SEO } from '../../components';
import { PageProps } from 'gatsby';

const ServicesPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Services' />
      hello
    </DefaultLayout>
  );
};

export default ServicesPage;
