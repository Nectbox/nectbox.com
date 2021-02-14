import * as React from 'react';
import {
  Phases,
  Services,
  Hero,
  SEO,
  DefaultLayout,
  Technologies,
} from '../components';
import { PageProps } from 'gatsby';

export default function HomePage({ location }: PageProps) {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <SEO pathname={location.pathname} title='Home' />
      <Hero ref={ctaRef} />
      <Services />
      <Technologies />
      <Phases />
    </DefaultLayout>
  );
}
