import * as React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import { Button, DefaultLayout, Link, Section, SEO } from '../components';
import { graphql, PageProps } from 'gatsby';
import { FluidImageProps } from '../types';

const Wrapper = styled.div`
  width: 100%;

  > * {
    margin: 0 auto;
    flex-grow: 1;
  }
`;

export interface ImageProps {
  notFound: FluidImageProps;
}

export default function NotFoundPage({
  location,
  data,
}: PageProps<ImageProps>) {
  return (
    <DefaultLayout>
      <SEO pathname={location.pathname} title='Not Found' />
      <Section
        title='Something went wrong'
        customTop={
          <Button color={theme.gradients.red}>
            <Link to='/'>Go Home</Link>
          </Button>
        }>
        <Wrapper>
          <Image
            fluid={data.notFound.childImageSharp.fluid}
            alt='You are lost'
          />
        </Wrapper>
      </Section>
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    notFound: file(relativePath: { eq: "not-found.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
