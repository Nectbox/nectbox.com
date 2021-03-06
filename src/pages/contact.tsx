import * as React from 'react';
import {
  ContactForm,
  DefaultLayout,
  Section,
  SEO,
  SplitSection,
} from '../components';
import { PageProps } from 'gatsby';

const ContactPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout showFooterTop={false}>
      <SEO pathname={location.pathname} title='Contact' />
      <Section
        caption='contact'
        title="Let's Talk"
        subTitle='Tell us about your product, book a free one-to-one call, get an estimation and a plan of bringing your product to your clients.'>
        <ContactForm />
      </Section>
    </DefaultLayout>
  );
};

export default ContactPage;
