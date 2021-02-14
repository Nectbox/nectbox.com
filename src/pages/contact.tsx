import * as React from 'react';
import { DefaultLayout, SEO } from '../components';
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
