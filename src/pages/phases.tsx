import * as React from 'react';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/default';
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
