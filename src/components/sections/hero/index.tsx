import * as React from 'react';
import Button from '../../common/button';
import Link from '../../common/link';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex } from '@chakra-ui/react';
import { FluidImageProps } from '../../../types';
import {
  HeroSection,
  HeroHeading,
  Content,
  Caption,
  SubHeading,
} from './hero.styles';
import { width, gradients } from '../../../styles/theme';

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
    <HeroSection ref={ref}>
      <Container maxW={width} p='0 1.6rem'>
        <Content>
          <Flex className='content'>
            <Caption>bringing businesses to digital</Caption>
            <HeroHeading>
              We develop <br />
              <mark>fast sites & apps</mark>
            </HeroHeading>
            <SubHeading>
              Providing product strategy, and software development for startup
              teams to launch and grow new digital products using cutting edge
              technologies.
            </SubHeading>
            <Flex className='button-wrapper'>
              <Button color={gradients.purpleish}>
                <Link to='/free-consultation'>Free consultation</Link>
              </Button>
              <Button color={gradients.black}>
                <Link to='/services'>What we do</Link>
              </Button>
            </Flex>
          </Flex>
          <Flex className='image'>
            <Image
              fluid={heroImage.childImageSharp.fluid}
              alt='Launching a new product'
            />
          </Flex>
        </Content>
      </Container>
    </HeroSection>
  );
});

export default Hero;
