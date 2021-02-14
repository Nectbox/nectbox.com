import * as React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Button, Link, SplitSection } from '../../common';
import { gradients } from '../../../styles/theme';
import { FluidImageProps } from '../../../types';

interface HeroImageProps {
  heroImage: FluidImageProps;
}

const Hero = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { heroImage }: HeroImageProps = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <SplitSection
      ref={ref}
      caption='bringing businesses to digital'
      title={
        <>
          We develop <br />
          <mark>fast sites & apps</mark>
        </>
      }
      subTitle='Providing product strategy, and software development for startup
                teams to launch and grow new digital products using cutting edge
                technologies.'
      customButton={
        <>
          <Button color={gradients.purpleish}>
            <Link to='/free-consultation'>Free consultation</Link>
          </Button>
          <Button color={gradients.black}>
            <Link to='/services'>What we do</Link>
          </Button>
        </>
      }
      rightPane={
        <Image
          fluid={heroImage.childImageSharp.fluid}
          alt='Launching a new product'
        />
      }
    />
  );
});

export default Hero;
