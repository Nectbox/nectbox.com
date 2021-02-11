import * as React from 'react';
import DefaultLayout from '../layouts/default';
import Hero from '../sections/hero';

export default function HomePage() {
  const ctaRef = React.useRef(null);

  return (
    <DefaultLayout heroCtaRef={ctaRef}>
      <Hero ref={ctaRef} />
    </DefaultLayout>
  );
}
