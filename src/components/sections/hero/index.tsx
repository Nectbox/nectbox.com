import * as React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Button, Link, SplitSection } from '../../common';
import { gradients } from '../../../styles/theme';
import { FluidImageProps, SplitSectionModel } from '../../../types';

interface ShowcaseImageProps {
  showcase: FluidImageProps;
}

interface HeroProps {
  data: SplitSectionModel;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  const { caption, subTitle } = props.data.sectionModel;
  const { showcase }: ShowcaseImageProps = useStaticQuery(graphql`
    query {
      showcase: file(relativePath: { eq: "hero.png" }) {
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
      caption={caption}
      title={
        <>
          We develop <br />
          <mark>fast sites & apps</mark>
        </>
      }
      subTitle={subTitle}
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
          fluid={showcase.childImageSharp.fluid}
          alt='Launching a new product'
        />
      }
    />
  );
});

export default Hero;
