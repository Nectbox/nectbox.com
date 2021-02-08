import * as React from 'react';
import DefaultLayout from '../layouts/default';
import { Link } from 'gatsby';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <Link to='/'>Go Home</Link>
    </DefaultLayout>
  );
}
