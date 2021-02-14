import * as React from 'react';
import SEO from '../components/seo';
import DefaultLayout from '../layouts/default';
import { PageProps } from 'gatsby';

const ContactPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Contact' />
      hello
    </DefaultLayout>
  );
};

export default ContactPage;
