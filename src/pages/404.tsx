import * as React from 'react';
import { DefaultLayout, SEO } from '../components';
import { Link, PageProps } from 'gatsby';

export default function NotFoundPage({ location }: PageProps) {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Not Found' />
      <Link to='/'>Go Home</Link>
    </DefaultLayout>
  );
}
