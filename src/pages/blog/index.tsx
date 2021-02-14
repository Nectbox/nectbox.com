import * as React from 'react';
import { DefaultLayout, SEO } from '../../components';
import { PageProps } from 'gatsby';

const BlogPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Blog' />
      hello
    </DefaultLayout>
  );
};

export default BlogPage;
