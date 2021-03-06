import * as React from 'react';
import { ContactForm, DefaultLayout, Section, SEO } from '../components';
import { PageProps } from 'gatsby';
import { colors } from '../styles/theme';

const FreeConsultationPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Free Consultation' />
      <Section
        caption='free consultation'
        title='Interested in working with us?'
        subTitle="Request a free one-on-one call where we'll listen to your problems, identify opportunities for your business, and show you our approach and proven strategies can help you achieve sucessful outcomes.">
        <ContactForm />
      </Section>
    </DefaultLayout>
  );
};

export default FreeConsultationPage;
