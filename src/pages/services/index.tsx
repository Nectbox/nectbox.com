import * as React from 'react';
import SEO from '../../components/seo';
import DefaultLayout from '../../layouts/default';
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
