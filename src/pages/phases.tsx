import * as React from 'react';
import { DefaultLayout, SEO } from '../components';
import { PageProps } from 'gatsby';

const PhasesPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Phases' />
      hello
    </DefaultLayout>
  );
};

export default PhasesPage;
