import * as React from 'react';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/default';
import { PageProps } from 'gatsby';

const FreeConsultationPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Free Consultation' />
      hello
    </DefaultLayout>
  );
};

export default FreeConsultationPage;
