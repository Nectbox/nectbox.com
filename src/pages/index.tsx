import * as React from 'react';
import DefaultLayout from '../layouts/default';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import Services from '../sections/services';
import Phases from '../sections/phases';
import { PageProps } from 'gatsby';

export default function HomePage({ location }: PageProps) {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='Home' />
      <Hero ref={ctaRef} />
      <Services />
      <Phases />
    </DefaultLayout>
  );
}
