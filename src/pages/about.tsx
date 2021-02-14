import * as React from 'react';
import { DefaultLayout, SEO } from '../components';
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
