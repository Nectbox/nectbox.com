import * as React from 'react';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/default';
import { PageProps } from 'gatsby';

const AboutPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='About' />
      hello
    </DefaultLayout>
  );
};

export default AboutPage;
