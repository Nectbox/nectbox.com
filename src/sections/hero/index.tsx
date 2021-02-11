import * as React from 'react';
import Button from '../../components/button';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex } from '@chakra-ui/react';
import { FluidImageProps } from '../../types';
import { HeroSection, HeroHeading, Caption, SubHeading } from './hero.styles';
import { width, gradients } from '../../styles/theme';

interface HeroImageProps {
  heroImage: FluidImageProps;
}

const Hero = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { heroImage }: HeroImageProps = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <HeroSection ref={ref}>
      <Container maxW={width} p='0 1.6rem'>
        <Flex>
          <Flex width='54%' flexFlow='column'>
            <Caption>bringing products to digital</Caption>
            <HeroHeading>
              We develop <br />
              <mark>fast sites & apps</mark>
            </HeroHeading>
            <SubHeading>
              Provideing product strategy, and software development for startup
              teams to launch and grow new digital products using cutting edge
              technologies
            </SubHeading>
            <Flex>
              <Button color={gradients.red}>Free consultation</Button>
              <Button margin='0 0 0 1.5rem'>What we do</Button>
            </Flex>
          </Flex>
          <Flex width='46%' className='image-container'>
            <Image
              fluid={heroImage.childImageSharp.fluid}
              alt='Launching a new product'
            />
          </Flex>
        </Flex>
      </Container>
    </HeroSection>
  );
});

export default Hero;
